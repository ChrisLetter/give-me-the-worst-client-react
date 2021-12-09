import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function loginUser() {
    await dispatch({ type: "LOGIN_USER" });
    navigate("/");
  }
  return (
    <div>
      <p>I am the login</p>
      <button onClick={() => loginUser()}>Click me to login</button>
    </div>
  );
}

export default Login;
