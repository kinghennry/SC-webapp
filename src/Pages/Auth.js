import React from "react";
import { GiPadlock } from "react-icons/gi";
import { useHistory } from "react-router-dom";

function Auth() {
  const history = useHistory();
  return (
    <div className="container">
      <div className="auth  flexDir-sty">
        <div className="p-20">
          <h3>Single Sign-On</h3>
          <br />
          <h2>Verify your identity</h2>
        </div>
        <div className="auth_item">
          <GiPadlock className="auth_icon" />
          <p>Approve a request on my Microsoft Authenticator app</p>
        </div>
        <div className="auth_item" onClick={() => history.push("/entercode")}>
          <div className="code_num flexBox-sty">123</div>
          <p>Use a Verification code from my mobile app</p>
        </div>

        <p className="blue ml-10">More Information</p>
        <div className="code_btn">
          <button className="grey">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
