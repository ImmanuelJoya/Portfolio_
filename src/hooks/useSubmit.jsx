import { useState } from 'react';

const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://portfolio-pied-beta-91.vercel.app/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      const result = await response.json();
      setIsLoading(false);
      if (response.ok) {
        return { type: 'success', message: result.message };
      } else {
        return { type: 'error', message: result.message || 'Submission failed' };
      }
    } catch (error) {
      setIsLoading(false);
      return { type: 'error', message: error.message };
    }
  };

  return { submit, isLoading };
};

export default useSubmit; // Default export