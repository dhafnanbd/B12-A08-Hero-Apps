import React, { useEffect, useState } from "react";
import InstalledAppCard from "../../Components/Installed App Card/InstalledAppCard";

const InstalledApps = () => {
  const [installedList, setInstalledList] = useState([]);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installed"));
    if (installedApps) {
      setInstalledList(installedApps);
    }
  }, []);
  return (
    <div className="bg-[#f5f5f5] p-15 flex flex-col gap-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Your Installed Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between">
        <h3>{installedList.length} Apps found</h3>
        <p>Sort by size</p>
      </div>
      <div className="flex flex-col gap-3">
        {installedList.map((app) => (
          <InstalledAppCard app={app}></InstalledAppCard>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
