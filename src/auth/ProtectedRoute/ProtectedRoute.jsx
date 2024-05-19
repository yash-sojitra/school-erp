import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login", { replace: true });
    }
    else {
      setLoading(false);
    }
  }, [isAuthenticated, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;