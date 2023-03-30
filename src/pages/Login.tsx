import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateJwt,
  updateFirstName,
  updateLastName,
} from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementsByTagName("main")[0].classList.add("bg-dark");

    return () => {
      document.getElementsByTagName("main")[0].classList.remove("bg-dark");
    };
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await axios.post("user/login", {
        email: username,
        password,
      });
      if (rememberMe) {
        localStorage.setItem("token", data.body.token);
      }
      console.log(data)
      dispatch(updateJwt(data.body.token));
      const { data: user } = await axios.post("user/profile", {
      },
        {
          headers: {
            Authorization: `Bearer ${data.body.token}`,
          },
        }
      );
      dispatch(updateFirstName(user.body.firstName));
      dispatch(updateLastName(user.body.lastName));
      navigate("/profile");
    } catch (err) {
      setError("User not found");
      console.log(err);
    }
  };

  return (
    <>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
          {error && <span className="error-message">{error}</span>}
        </form>
      </section>
    </>
  );
}

export default Login;
