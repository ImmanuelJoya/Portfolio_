package main

import (
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using system env vars")
	}

	// HTTP server
	http.HandleFunc("/submit", submitHandler)
	http.HandleFunc("/", rootHandler)

	log.Println("Starting server on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, `{"message":"Go backend is running"}`)
}

func submitHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, `{"type":"error","message":"Method not allowed"}`, http.StatusMethodNotAllowed)
		return
	}

	// Parse form data
	err := r.ParseForm()
	if err != nil {
		http.Error(w, `{"type":"error","message":"Failed to parse form"}`, http.StatusBadRequest)
		return
	}

	firstName := r.FormValue("firstName")
	email := r.FormValue("email")
	enquiryType := r.FormValue("enquiryType")
	message := r.FormValue("message")

	// Basic validation
	if firstName == "" || email == "" || enquiryType == "" || message == "" {
		http.Error(w, `{"type":"error","message":"All fields are required"}`, http.StatusBadRequest)
		return
	}

	// Email configuration
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"
	smtpUser := "immanueljoy107@gmail.com"
	smtpPass := os.Getenv("SMTP_PASSWORD")
	recipient := "immanueljoy107@gmail.com"

	auth := smtp.PlainAuth("", smtpUser, smtpPass, smtpHost)
	msg := []byte(fmt.Sprintf("To: %s\r\n"+
		"Subject: New Contact Form Submission\r\n"+
		"\r\n"+
		"Name: %s\r\nEmail: %s\r\nEnquiry Type: %s\r\nMessage: %s\r\n",
		recipient, firstName, email, enquiryType, message))

	// Send email
	err = smtp.SendMail(smtpHost+":"+smtpPort, auth, smtpUser, []string{recipient}, msg)
	if err != nil {
		log.Printf("Failed to send email: %v", err)
		http.Error(w, `{"type":"error","message":"Failed to send email"}`, http.StatusInternalServerError)
		return
	}

	// Success response
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, `{"type":"success","message":"Email sent successfully"}`)
}
