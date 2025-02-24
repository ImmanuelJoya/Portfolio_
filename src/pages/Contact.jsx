import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useAlertContext } from '../hooks/AlertContext';
import { useSubmit } from '../hooks/useSubmit';

const Contact = () => {
  const { onOpen } = useAlertContext();
  const { submit, isLoading } = useSubmit();
  const [showPopup, setShowPopup] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      enquiryType: '',
      message: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) errors.firstName = 'First name is required';
      if (!values.email) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email is invalid';
      if (!values.enquiryType) errors.enquiryType = 'Type of enquiry is required';
      if (!values.message) errors.message = 'Message is required';
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      const response = await submit(values);
      if (response.type === 'success') {
        onOpen(`Submission successful for ${values.firstName}`);
        resetForm();
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Auto-hide popup after 3s
      } else {
        onOpen(`Submission failed: ${response.message}`);
      }
    },
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-30 pointer-events-none" />

      <motion.div
        className="max-w-lg w-full mx-auto p-6 bg-gray-800/40 backdrop-blur-md rounded-xl shadow-lg border border-gray-700/50 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-semibold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Your first name"
              className={`mt-1 block w-full px-4 py-2 bg-gray-900/50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-600'
              } text-white`}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.firstName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className={`mt-1 block w-full px-4 py-2 bg-gray-900/50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-600'
              } text-white`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>

          {/* Enquiry Type */}
          <div>
            <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-300">
              Type of Enquiry
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              className={`mt-1 block w-full px-4 py-2 bg-gray-900/50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                formik.touched.enquiryType && formik.errors.enquiryType ? 'border-red-500' : 'border-gray-600'
              } text-white`}
              value={formik.values.enquiryType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" className="text-gray-400">Select an option</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
            {formik.touched.enquiryType && formik.errors.enquiryType && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.enquiryType}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message"
              className={`mt-1 block w-full px-4 py-2 bg-gray-900/50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-600'
              } text-white`}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className={`w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-md shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </motion.button>
        </form>

        {/* Success Popup */}
        {showPopup && (
          <motion.div
            className="fixed top-16 left-1/2 transform -translate-x-1/2 w-80 bg-gradient-to-r from-green-500 to-teal-500 text-white text-center p-4 rounded-md shadow-lg z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Your message has been submitted successfully!
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;