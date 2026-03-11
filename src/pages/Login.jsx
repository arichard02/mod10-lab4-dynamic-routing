import { useContext } from "react";
import { AuthContext } from "../App";

function Login() {
  const { login } = useContext(AuthContext);

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
