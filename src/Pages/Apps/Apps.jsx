import React from "react";
import { useLoaderData } from "react-router";
import App from "../../Components/App/App";

const Apps = () => {
  const allApps = useLoaderData();

  return (
    <div className="flex flex-col gap-5 text-center p-10 bg-[#f5f5f5]">
      <div>
        <h2 className="text-4xl font-bold">Our All Applications</h2>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between">
        <p className="font-bold">({allApps.length}) Apps Found</p>
        <p>Search</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {allApps.map((app) => (
          <App app={app}></App>
        ))}
      </div>
    </div>
  );
};

export default Apps;
