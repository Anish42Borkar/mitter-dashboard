import React from "react";
import { CallChatSvg, FireSvg } from "../svg";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between z-10 items-center  border-b fixed top-0 bg-white h-20 navbar-width p-5">
      <p className="text-3xl font-semibold ">Welcome Rahul!</p>
      <div className="flex gap-5 items-center">
        <div className="gradient-border border-50 cursor-pointer flex items-center justify-between py-1  px-2 w-16   h-fit ">
          <FireSvg />
          <span className="text-base">2</span>
        </div>

        <div className="flex items-center justify-center cursor-pointer py-2 px-2 rounded-lg border border-[#014EE6] text-[#014EE6]">
          Explore Community
        </div>

        <div className="flex  items-center justify-between cursor-pointer py-2 px-4 rounded-lg text-white w-52 nav-btn-gradient">
          <p className="">Polity</p>
          <div className="flex gap-2">
            <span className="text-gray-300">|</span>
            <ChevronDown />
          </div>
        </div>

        <button>
          <CallChatSvg w={26} h={27} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
