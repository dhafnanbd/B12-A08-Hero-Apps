import React, { useState } from "react";
import App from "../../Components/App/App";
import useApps from "../../Hooks/useApps";

const Apps = () => {
  const { allApps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  if (loading) return <p>Loading...</p>;
  const searchedApps = term
    ? allApps.filter((app) => app.title.toLowerCase().includes(term))
    : allApps;

  return (
    <div className="flex flex-col gap-5 text-center p-10 bg-[#f5f5f5]">
      <div>
        <h2 className="text-4xl font-bold">Our All Applications</h2>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between">
        <p className="font-bold">({searchedApps.length}) Apps Found</p>
        <label className="input focus-within:outline-none focus-within:ring-1 focus-within:ring-[#9c9c9c] focus-within:border-transparent">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
            className="focus:outline-none"
          />
        </label>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {searchedApps.map((app) => (
          <App key={app.id} app={app}></App>
        ))}
      </div>
    </div>
  );
};

export default Apps;
