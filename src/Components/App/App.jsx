import React from "react";
import { Link } from "react-router";

const App = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`}>
      <div className="cursor-pointer p-5 bg-white rounded-xl flex flex-col gap-2 items-center justify-between transition-transform duration-300 ease-in-out hover:-translate-y-1 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
        <div
          className="w-full h-[200px] bg-cover bg-center border-[1px] border-[#e9e9e9] rounded-xl"
          style={{ backgroundImage: `url(${app.image})` }}
        ></div>

        <h3 className="text-left text-lg w-full font-bold">{app.title}</h3>
        <div className="w-full flex justify-between items-center">
          <button className="btn btn-soft text-[#00D390] bg-[#F1F5E8] flex">
            <img
              className="h-4 w-4 flex"
              src="/assets/icon-downloads.png"
              alt=""
            />
            {`${app.downloads / 1000000} M`}
          </button>
          <button className="btn btn-soft text-[#FF8811] bg-[#F1F5E8] flex">
            <img
              className="h-4 w-4 flex"
              src="/assets/icon-ratings.png"
              alt=""
            />
            {app.ratingAvg}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default App;
