import React from "react";

const AppError = () => {
  return (
    <div className="flex flex-col gap-2.5 items-center p-12">
      <img className="h-80" src="/assets/App-Error.png" alt="" />
      <h3 className="text-4xl font-bold">OPPS!! APP NOT FOUND</h3>
      <p>
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <a href="../apps">
        <button className="btn btn-primary">Explore Apps</button>
      </a>
    </div>
  );
};

export default AppError;
