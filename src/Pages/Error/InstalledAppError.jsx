import React from "react";

const InstalledAppError = () => {
  return (
    <div className="flex flex-col gap-2.5 items-center p-12 bg-white">
      <img
        className="h-50 rounded-4xl"
        src="/assets/TraingleError.jpg"
        alt=""
      />
      <h3 className="text-4xl font-bold">OPPS!! No Apps Installed</h3>
      <a href="../apps">
        <button className="btn btn-primary">All Apps</button>
      </a>
    </div>
  );
};

export default InstalledAppError;
