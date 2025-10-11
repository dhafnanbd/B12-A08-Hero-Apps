import React from "react";
import Header from "../../Components/Header/Header";

const Error = () => {
  return (
    <div className="flex flex-col gap-2.5 items-center p-5">
      <img src="/assets/error-404.png" alt="" />
      <button className="btn btn-primary">
        <a href="/">Go Home</a>
      </button>
    </div>
  );
};

export default Error;
