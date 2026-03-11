import { useContext } from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";

export default function Admin() {

  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <h2>Welcome to the Admin Dashboard</h2>;
}