import React from "react";
import { useHistory } from "react-router-dom";

function Code() {
  const history = useHistory();
  return (
    <div className="code">
      <h1>Enter Code</h1>
      <div className="flex">
        <div className="code_num flexBox-sty">123</div>
        <p>
          Please type in the code displayed on your authenticator app from your
          device.
        </p>
      </div>

      {/* code input */}
      <div className="code_input">
        <input placeholder="Code" />
      </div>
      <br />
      <p>
        Having Trouble?&nbsp;
        <span className="blue">Sign in another way</span>
      </p>
      <br />
      <p className="blue">More Information</p>
      <div className="code_btn">
        <button onClick={() => history.push("/success")}>Verify</button>
      </div>
    </div>
  );
}

export default Code;
