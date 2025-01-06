import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrintHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforePrint = () => {
      const currentLocation = window.location.pathname;
      navigate('/print', { replace: true });
      const handleAfterPrint = () => {
        navigate(currentLocation, { replace: true });
        window.removeEventListener('afterprint', handleAfterPrint);
      };
      window.addEventListener('afterprint', handleAfterPrint);
    };

    window.addEventListener('beforeprint', handleBeforePrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleBeforePrint);
    };
  }, [navigate]);

  return null;
};

export default PrintHandler;
