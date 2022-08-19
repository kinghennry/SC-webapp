import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
function Success() {
  return (
    <div className="container">
      <div className="success flexDir-sty flexBox-sty">
        <BsCheckCircle className="success_icon" />
        <h1>Perfect</h1>
        <p>Now you can download the report</p>

        <div className="sucess_download flexBox-sty">
          <IoMdDownload />
        </div>
      </div>
    </div>
  );
}

export default Success;
