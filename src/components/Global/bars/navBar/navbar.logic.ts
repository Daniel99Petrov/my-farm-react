import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";

export const useNavbarLogic = () => {
    const modalMessage = `Are you sure you want to logout?`;
    const navigate = useNavigate();
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();
  
    const handleLogout = () => {
      setLogoutModalOpen(true);
    };
  
    const handleConfirmLogout = () => {
      logout();
      navigate("/user/signin");
      setLogoutModalOpen(false);
    };
  
    const handleCancelLogout = () => {
      setLogoutModalOpen(false);
    };
  
    return { modalMessage, isLogoutModalOpen, handleLogout, handleConfirmLogout, handleCancelLogout, isAuthenticated };
  };