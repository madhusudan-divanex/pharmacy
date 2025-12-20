import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getSecureApiData } from "../Services/api";


const ProtectedRoute = ({ component: Component }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        navigate("/login", { replace: true });
        return;
      }
      try {
        const res = await getSecureApiData(`pharmacy/${localStorage.getItem("userId")}`);
        if (res?.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false)
          navigate('/login')
          throw new Error("Invalid token");
        }
      } catch (error) {
        const toastId = "token-Id"
        localStorage.removeItem("token");
        localStorage.removeItem('userId')
        setIsAuthenticated(false);
        if (!toast.isActive(toastId)) {
          toast.error("Token expired. Please log in again.", { toastId: toastId });
        }
        navigate("/login", { replace: true });
      }
    };

    validateToken();
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  return isAuthenticated ? <Component /> : null;
};

export default ProtectedRoute;


