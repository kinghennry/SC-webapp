import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { register } from "../features/registerSlice";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading } = useSelector((state) => ({ ...state.register }));
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    dispatch(register({ formData, history }));
  };

  console.log(user);
  return (
    <div className="container">
      <div className="login flexBox-sty flexDir-sty">
        <form className="flexDir-sty" onSubmit={handleSubmit}>
          <div className="login_header text-ct">
            <h2>Please sign in</h2>
          </div>
          <div className="login_inputs">
            <label>Email address</label>
            <div className="login_input flex-sty">
              <input
                placeholder="jane-doe@example.com"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="login_inputs">
            <label>Password</label>
            <div className="login_input flex-sty">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          {/* <button onClick={() => history.push("/signup")}> */}
          <button className="flexBox-sty">
            {loading && (
              <ThreeDots
                height="20"
                width="20"
                color="white"
                ariaLabel="loading"
              />
            )}
            <span style={{ marginLeft: "10px" }}>Log in</span>
          </button>
        </form>
        <p className="text-ct m-19">&#169;2020</p>
      </div>
    </div>
  );
}

export default Home;
