import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const RedirectToAppropriatePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isSignedUp = localStorage.getItem("isSignedUp");
    if (isSignedUp) {
      navigate("/login");
    } else {
      navigate("/signup");
    }
  }, [navigate]);

  return null; // This component does not render anything
};
