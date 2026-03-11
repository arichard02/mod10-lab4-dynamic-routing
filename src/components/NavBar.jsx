import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

export default function NavBar() {

  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/blog">Blogs</Link> |{" "}

      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link> |{" "}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}