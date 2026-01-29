import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Agar already logged in hai → dashboard bhej do
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  // Nahi to login / signup dikhne do
  return children;
};

export default PublicRoute;
