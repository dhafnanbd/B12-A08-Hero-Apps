import React from "react";
import { useNavigate } from "react-router";

const AppError = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2.5 items-center p-12">
      <img className="h-80" src="/assets/App-Error.png" alt="" />
      <h3 className="text-4xl font-bold">OPPS!! APP NOT FOUND</h3>
      <p>
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <a href="../">
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Go Home
        </button>
      </a>
    </div>
  );
};

export default AppError;
