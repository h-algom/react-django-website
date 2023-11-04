import { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({signin, signup, reset}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
      e.preventDefault();
  };

  return (
      <>
          <form onSubmit={handleForm}>
              <input
                  type="email"
                  id="login-email"
                  value={email}
                  placeholder="Enter Email"
                  autoComplete="true"
              />
              <input
                  type="password"
                  id="login-pswd"
                  value={password}
                  className="mt-15"
                  placeholder="Enter Password"
              />
              <div className="flex-row align-center space-between fs-14 mt-15">
                  <span className="flex-row align-center">Remember Me</span>
                  <Link to={`/`} className="link">
                      Forgot Password?
                  </Link>
              </div>
              <button className="btn mt-20">Sign In</button>
              <button className="btn mt-20">Sign Up</button>
          </form>
      </>
  );
};

export default AuthForm;