import React from "react";
import useApps from "../../Hooks/useApps";
import App from "../App/App";
import { Link } from "react-router";
import FeaturedAppSkeleton from "../../Components/App/FeaturedAppSkeleton";

const FeaturedApps = () => {
  const { allApps, loading } = useApps();
  if (loading) return <FeaturedAppSkeleton></FeaturedAppSkeleton>;
  const featuredApps = allApps.slice(0, 8);
  return (
    <div className="bg-[#f5f5f5] p-10 text-center flex flex-col gap-5 items-center ">
      <div>
        <h2 className="text-4xl font-bold">Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-3 grid-cols-4 gap-4 w-full">
        {featuredApps.map((app) => (
          <App key={app.id} app={app}></App>
        ))}
      </div>
      <a href="../apps">
        <button className="btn btn-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
          Show All
        </button>
      </a>
    </div>
  );
};

export default FeaturedApps;
