import React from "react";
import { Link } from "react-router";

const InstalledAppCard = ({ app, handleUninstall }) => {
  const { image, title, size, ratingAvg, downloads, id } = app;
  return (
    <div className=" p-4 bg-white rounded-xl flex gap-5 items-center justify-between border-[1px] border-white hover:drop-shadow-lg ">
      <div className="flex gap-5">
        <div
          className="w-20 h-20 bg-cover bg-center border-[1px] border-[#e9e9e9] rounded-xl"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="flex flex-col justify-between py-2.5">
          <Link className="cursor-pointer" to={`/apps/${id}`}>
            <h3 className="text-xl font-medium">{title}</h3>
          </Link>
          <div className="flex gap-3 items-center text-4 font-medium">
            <div className="flex gap-1.5 items-center">
              <img
                className="w-4 h-4"
                src="/assets/icon-downloads.png"
                alt=""
              />
              <p className="text-[#00D390]">{downloads / 1000000} M</p>
            </div>
            <div className="flex gap-1.5 items-center">
              <img className="w-4" src="/assets/icon-ratings.png" alt="" />
              <p className="text-[#FF8811]">{ratingAvg}</p>
            </div>
            <p className="text-[#627382]">{size}</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleUninstall(id, title)}
        className="btn btn-primary text-end cursor-pointer"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;
