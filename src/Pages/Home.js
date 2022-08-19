import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  return (
    <div className="container">
      <div className="login flexBox-sty flexDir-sty">
        <form className="flexDir-sty">
          <div className="login_header text-ct">
            <h2>Please sign in</h2>
          </div>
          <div className="login_inputs">
            <label>Email address</label>
            <div className="login_input flex-sty">
              <input placeholder="jane-doe@example.com" />
            </div>
          </div>
          <div className="login_inputs">
            <label>Password</label>
            <div className="login_input flex-sty">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
              />

              {showPassword ? (
                <AiOutlineEye
                  className="login__icon"
                  onClick={handleShowPassword}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="login__icon"
                  onClick={handleShowPassword}
                />
              )}
            </div>
          </div>
          <button onClick={() => history.push("/signup")}>Sign in</button>
        </form>
        <p className="text-ct m-19">&#169;2020</p>
      </div>
    </div>
  );
}

export default Home;
