import Image from "next/image";
import React from "react";
import Badge from "../badge";
import Link from "next/link";
import { CardDataT } from "@/constant";

type CardT = {
  data: CardDataT;
};

const Card = ({ data }: CardT) => {
  return (
    <Link
      href="details"
      className="p-5 block rounded-lg border border-gray-300 shadow-md"
    >
      <div className="head flex justify-between items-center">
        <div className="flex gap-2">
          <div
            style={{
              backgroundColor: data.color,
            }}
            className="w-10 h-10 border flex justify-center items-center text-white rounded-full text-xl font-bold"
          >
            {data.name[0]}
          </div>
          <div className="">
            <p className="text-base font-semibold">{data.name}</p>
            <p className="text-xs text-gray-300">2 hour ago</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="">
            <Image
              width={20}
              height={20}
              src="/assets/icons/eye.png"
              alt="views"
            />{" "}
          </div>
          <span className="text-sm font-semibold">125</span>
        </div>
      </div>

      <div className="mt-5 flex gap-2 items-center">
        <p className="w-3 h-3 bg-blue-700 rounded-full"></p>
        Preparation Strategy
      </div>

      <p className="mt-4 text-sm text-[#3A3A3A]">
        Lorem ipsum dolor sit amet consectetur. Vitae vel sed non luctus ipsum
        amet mattis nulla sagittis. Ultricies consectetur vitae bibendum
        volutpat at. Odio ut urna risus cras nunc facilisis a ipsum.
      </p>

      <div className="footer mt-3 flex justify-between">
        <div className="flex items-center gap-5">
          <div className="bg-[#F9F9F9] flex  gap-2 w-fit py-1 px-4 rounded-full">
            <div className="flex gap-2 items-center">
              <div className="">
                <Image
                  width={16}
                  height={16}
                  src="/assets/icons/upload.png"
                  alt="views"
                />{" "}
              </div>
              <span className="text-xs font-semibold">100</span>
            </div>
            <span className="text-[#CFCFCF]">|</span>

            <div className="flex gap-2 items-center">
              <div className="">
                <Image
                  width={16}
                  height={16}
                  src="/assets/icons/download.png"
                  alt="views"
                />{" "}
              </div>
              <span className="text-xs font-semibold">13</span>
            </div>
            <span className="text-[#CFCFCF]">|</span>
            <div className="flex gap-2 items-center">
              <div className="">
                <Image
                  width={16}
                  height={16}
                  src="/assets/icons/comment.png"
                  alt="views"
                />{" "}
              </div>
              <span className="text-xs font-semibold">25</span>
            </div>
          </div>
          <p className="text-[10px] text-[#FC8026]">New comment 5 min ago</p>
        </div>
        <div className="flex gap-2">
          <Badge title="Strategy" varient="gradient" />
          <Badge title="Preparation" varient="gradient" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
