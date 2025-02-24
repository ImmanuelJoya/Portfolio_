// src/hooks/useSubmit.jsx
import { useState } from 'react';

export const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (data) => {
    setIsLoading(true);
    try {
      
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.5 ? resolve({ type: 'success' }) : reject({ type: 'error', message: 'Submission failed' });
        }, 1000);
      });
      return { type: 'success' };
    } catch (error) {
      return { type: 'error', message: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading };
};