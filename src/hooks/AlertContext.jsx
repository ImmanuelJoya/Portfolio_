// src/hooks/AlertContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ isOpen: false, message: '' });

  const onOpen = (message) => {
    setAlert({ isOpen: true, message });
    setTimeout(() => {
      setAlert({ isOpen: false, message: '' });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ onOpen }}>
      {children}
      {alert.isOpen && (
        <div style={{ position: 'fixed', top: 20, right: 20, background: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}>
          {alert.message}
        </div>
      )}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  return useContext(AlertContext);
};