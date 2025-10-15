import React from "react";

const AppSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 text-center p-10 bg-[#f5f5f5]">
      <div>
        <div className="skeleton h-10 mb-1"></div>
        <div className="skeleton h-4"></div>
      </div>
      <div className="flex justify-between">
        <div className="skeleton h-6 w-50"></div>
        <div className="skeleton h-6 w-50"></div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-white rounded-xl flex flex-col gap-2 items-center justify-between">
          <div className="skeleton w-full h-[200px] border-[1px] border-[#e9e9e9] rounded-xl"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="w-full flex justify-between items-center gap-3">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl flex flex-col gap-2 items-center justify-between">
          <div className="skeleton w-full h-[200px] border-[1px] border-[#e9e9e9] rounded-xl"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="w-full flex justify-between items-center gap-3">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl flex flex-col gap-2 items-center justify-between">
          <div className="skeleton w-full h-[200px] border-[1px] border-[#e9e9e9] rounded-xl"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="w-full flex justify-between items-center gap-3">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl flex flex-col gap-2 items-center justify-between">
          <div className="skeleton w-full h-[200px] border-[1px] border-[#e9e9e9] rounded-xl"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="w-full flex justify-between items-center gap-3">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl flex flex-col gap-2 items-center justify-between">
          <div className="skeleton w-full h-[200px] border-[1px] border-[#e9e9e9] rounded-xl"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="w-full flex justify-between items-center gap-3">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl flex flex-col gap-2 items-center justify-between">
          <div className="skeleton w-full h-[200px] border-[1px] border-[#e9e9e9] rounded-xl"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="w-full flex justify-between items-center gap-3">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl flex flex-col gap-2 items-center justify-between">
          <div className="skeleton w-full h-[200px] border-[1px] border-[#e9e9e9] rounded-xl"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="w-full flex justify-between items-center gap-3">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl flex flex-col gap-2 items-center justify-between">
          <div className="skeleton w-full h-[200px] border-[1px] border-[#e9e9e9] rounded-xl"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="w-full flex justify-between items-center gap-3">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSkeleton;
