import React from "react";
import Header from "../../Components/Header/Header";

const Error = () => {
  return (
    <div className="flex flex-col gap-2.5 items-center p-12">
      <img className="h-80" src="/assets/error-404.png" alt="" />
      <h3 className="text-4xl font-bold">Oops, page not found!</h3>
      <p>The page you are looking for is not available.</p>
      <a href="/">
        <button className="btn btn-primary">Go Home</button>
      </a>
    </div>
  );
};

export default Error;
