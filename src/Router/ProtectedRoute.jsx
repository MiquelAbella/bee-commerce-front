import { useContext, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Swal.fire("Please login");
      navigate(-1);
    }
  }, [user]);
  
  return children;
};
