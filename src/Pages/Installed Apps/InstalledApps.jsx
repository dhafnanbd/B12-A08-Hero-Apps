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

  const [sortOrder, SetSortOrder] = useState("None");

  const sortedApps = (() => {
    if (sortOrder === "download-asc")
      return [...installedList].sort((a, b) => a.downloads - b.downloads);
    else if (sortOrder === "download-dsc")
      return [...installedList].sort((a, b) => b.downloads - a.downloads);
    else return [...installedList];
  })();

  const handleUninstall = (id) => {
    const installedApps = JSON.parse(localStorage.getItem("installed"));
    const updatedAppsList = installedApps.filter((app) => app.id !== id);
    setInstalledList(updatedAppsList);
    localStorage.setItem("installed", JSON.stringify(updatedAppsList));
  };

  return (
    <div className="bg-[#f5f5f5] p-15 flex flex-col gap-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Your Installed Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold">
          {installedList.length} Apps found
        </h3>
        <label className="form-control w-full max-w-3xs">
          <select
            className="select focus-within:outline-none focus-within:ring-1 focus-within:ring-[#9c9c9c] focus-within:border-transparent"
            value={sortOrder}
            onChange={(e) => SetSortOrder(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="download-asc">Low - High</option>
            <option value="download-dsc">High - Low</option>
          </select>
        </label>
      </div>
      <div className="flex flex-col gap-3">
        {sortedApps.map((app) => (
          <InstalledAppCard
            key={app.id}
            app={app}
            handleUninstall={handleUninstall}
          ></InstalledAppCard>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
