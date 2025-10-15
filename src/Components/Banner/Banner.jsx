import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200 items-center">
        <div className="text-center flex flex-col gap-4 items-center pt-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">
              We Build
              <br />
              <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="py-6">
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn btn-outline border-[#8f8f8f]">
                <img className="w-4" src="../assets/google play.png" alt="" />
                <Link target="_blank" to="https://play.google.com/store">
                  Google Play
                </Link>
              </button>
              <button className="btn btn-outline border-[#8f8f8f]">
                <img className="w-4" src="../assets/app store.png" alt="" />
                <Link target="_blank" to="https://www.apple.com/app-store/">
                  App Store
                </Link>
              </button>
            </div>
          </div>
          <img className="max-h-[300px]" src="/assets/hero.png" alt="" />
        </div>
      </div>
      {/* Stats */}
      <div className="text-[14px] p-10 flex flex-col items-center gap-8 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
        <h2 className="text-4xl font-bold">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex gap-10 justify-around">
          <div className="text-center flex flex-col gap-2.5">
            <p>Total Downloads</p>
            <h2 className="text-5xl font-extrabold">29.6M</h2>
            <p>21% more than last month</p>
          </div>
          <div className="text-center flex flex-col gap-2.5">
            <p>Total Reviews</p>
            <h2 className="text-5xl font-extrabold">906K</h2>
            <p>46% more than last month</p>
          </div>
          <div className="text-center flex flex-col gap-2.5">
            <p>Active Apps</p>
            <h2 className="text-5xl font-extrabold">132+</h2>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
