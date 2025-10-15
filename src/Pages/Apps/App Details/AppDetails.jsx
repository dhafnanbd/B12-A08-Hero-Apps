import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../../../Hooks/useApps";
import RatingChart from "../../../Components/Rating Chart/RatingChart";
import { toast } from "react-toastify";

const AppDetails = () => {
  const currentId = useParams().id;
  const { allApps, loading } = useApps();
  const currentApp = allApps.find((app) => String(app.id) === currentId);
  const [isInstalledstate, setIsInstalled] = useState(false);
  let isInstalled;

  if (loading) return <p>Loading...</p>;

  const installedApps = JSON.parse(localStorage.getItem("installed"));
  if (installedApps) {
    const status = installedApps.some(({ id }) => id == currentApp.id);
    isInstalled = status;
  }

  let {
    image,
    title,
    companyName,
    reviews,
    ratingAvg,
    downloads,
    size,
    description,
    ratings,
  } = currentApp;

  const handleInstall = () => {
    toast.success(`${title} Installed!`);
    let updatedInstalledApps = [];
    if (installedApps) {
      if (isInstalled) {
        return alert("mia koybar install korben?!");
      } else {
        updatedInstalledApps = [...installedApps, currentApp];
      }
    } else updatedInstalledApps.push(currentApp);
    localStorage.setItem("installed", JSON.stringify(updatedInstalledApps));
    setIsInstalled(true);
    isInstalled = isInstalledstate;
  };

  return (
    <div className="bg-[#f5f5f5] p-15 flex flex-col gap-8">
      <div className="flex gap-8">
        <div
          className="w-2/7 bg-cover bg-center border-[1px] border-[#e9e9e9] rounded-xl"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="w-full flex flex-col gap-5 items-start ">
          <div>
            <h3 className="text-[32px] font-bold">{title}</h3>
            <p className="text-xl text-[#627382]">
              Developed by{" "}
              <span className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>
          <hr className="text-gray-400 w-full" />
          <div className="flex gap-10">
            <div className="flex flex-col gap-1.5">
              <img className="w-8" src="/assets/icon-downloads.png" alt="" />
              <p className="text-[#001931]">Downloads</p>
              <h4 className="text-4xl font-extrabold">
                {downloads / 1000000} M
              </h4>
            </div>
            <div className="flex flex-col gap-1.5">
              <img className="w-8" src="/assets/icon-ratings.png" alt="" />
              <p className="text-[#001931]">Average Ratings</p>
              <h4 className="text-4xl font-extrabold">{ratingAvg}</h4>
            </div>
            <div className="flex flex-col gap-1.5">
              <img className="w-8" src="/assets/icon-review.png" alt="" />
              <p className="text-[#001931]">Total Reviews</p>
              <h4 className="text-4xl font-extrabold">{reviews / 1000} K</h4>
            </div>
          </div>
          <button
            disabled={isInstalled ? "disabled" : ""}
            onClick={handleInstall}
            className="btn btn-primary"
          >
            {isInstalled ? "Installed" : `Install Now ${size} MB`}
          </button>
        </div>
      </div>
      <hr className="text-gray-300 w-full" />
      <div>
        <h4 className="text-xl font-semibold text-[#001931]">Ratings</h4>
        <RatingChart ratings={ratings}></RatingChart>
      </div>
      <hr className="text-gray-300 w-full" />
      <div>
        <h4 className="text-xl font-semibold text-[#001931]">Description</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
