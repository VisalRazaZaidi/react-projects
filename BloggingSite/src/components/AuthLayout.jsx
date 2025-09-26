import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AuthLayout({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);

  // Still loading auth state
  if (authStatus === null) {
    return <h1>Loading...</h1>;
  }

  // If route requires authentication but user is not logged in
  if (authentication && !authStatus) {
    return <Navigate to="/login" replace />;
  }

  // If route is public but user is logged in
  if (!authentication && authStatus) {
    return <Navigate to="/" replace />;
  }

  // Otherwise render children
  return <>{children}</>;
}
