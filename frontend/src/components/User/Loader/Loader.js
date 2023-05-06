import React from "react";
import { useState, useEffect } from "react";
import { useNavigate , useLocation } from "react-router-dom";
const Loader = ({path = "login"}) => {
  const [count, setcount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setcount((preValue) => --preValue);
    }, 1000);
    count === 0 && navigate(`/${path}`,{
        state: location.pathname
    });
    return () => clearInterval(interval);
  }, [count, navigate,location , path]);

  return (
  <>
        <h6>{count}</h6>
        <h4>Spinner</h4>
  </>
  )
};

export default Loader;
