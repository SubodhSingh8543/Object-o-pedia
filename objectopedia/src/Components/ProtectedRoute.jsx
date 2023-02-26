import { useToast } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const toast = useToast();
  if (!user) {
    toast({
      title: 'Please Login First',
      description: "",
      status: 'success',
      duration: 9000,
      position: "top",
      isClosable: true,
    })
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
