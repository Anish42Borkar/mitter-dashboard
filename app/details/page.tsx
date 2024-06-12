import Comments from "@/components/comment";
import { comments } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Details = () => {
  return (
    <div className=" mx-10 xl:mx-72 pt-10 ">
      <Link href="/">
        <div className="flex gap-3 items-center">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.725 0.699952C6.90833 0.883286 7 1.11662 7 1.39995C7 1.68328 6.90833 1.91662 6.725 2.09995L2.825 5.99995L6.725 9.89995C6.90833 10.0833 7 10.3166 7 10.6C7 10.8833 6.90833 11.1166 6.725 11.3C6.54167 11.4833 6.30833 11.575 6.025 11.575C5.74167 11.575 5.50833 11.4833 5.325 11.3L0.725001 6.69995C0.625001 6.59995 0.554 6.49162 0.512001 6.37495C0.470667 6.25828 0.45 6.13328 0.45 5.99995C0.45 5.86662 0.470667 5.74162 0.512001 5.62495C0.554 5.50828 0.625001 5.39995 0.725001 5.29995L5.325 0.699952C5.50833 0.516619 5.74167 0.42495 6.025 0.424951C6.30833 0.424951 6.54167 0.516619 6.725 0.699952Z"
              fill="#262626"
            />
          </svg>
          Back
        </div>
      </Link>

      <div className="flex gap-2 my-8">
        <div className="w-10 text-white h-10 border flex justify-center items-center bg-orange-300 rounded-full text-xl font-bold">
          A
        </div>
        <div className="">
          <p className="text-base font-semibold">Rahul Sing</p>
          <p className="text-xs text-gray-300">2 hour ago</p>
        </div>
      </div>

      <p className="font-bold text-xl mb-5">Preparation Strategy</p>

      <div className="space-y-3 text-sm text-[#3A3A3A] leading-loose">
        <p className="">
          Lorem ipsum dolor sit amet consectetur. Placerat facilisis natoque
          velit dignissim sagittis. Diam vivamus luctus sollicitudin posuere
          duis dui euismod consectetur. Amet sed amet euismod diam purus.
          Interdum morbi pellentesque parturient enim massa. Lorem est commodo
          urna porttitor amet egestas eget urna.
        </p>
        <p className="">
          Sed convallis arcu purus eu nulla. Lorem nulla tempus tellus nunc nisi
          suspendisse nunc. In enim hendrerit et convallis egestas est. Mattis
          amet id imperdiet consequat risus erat. Nunc neque donec non pulvinar
          id pharetra. Arcu et nisi dictum phasellus.
        </p>

        <p className="">
          Mattis neque a lorem ornare at sagittis. Consectetur at vel feugiat
          amet consectetur magna quis enim. Ac viverra sed morbi diam volutpat
          volutpat. Viverra vel tempus in a ornare vivamus pulvinar proin
          nullam. At odio non pulvinar id aliquet arcu orci ultricies platea.
          Elementum eu velit vitae commodo nibh nulla sit. Dis neque mattis
          vestibulum quisque odio praesent lacinia. Id ultricies et pharetra
          purus nibh sed a scelerisque. Habitasse duis velit nec pellentesque mi
          rhoncus sed quis.
        </p>
      </div>

      <div className="bg-[#F9F9F9] flex  gap-2 w-fit py-1 px-4 rounded-full mt-5">
        <div className="flex gap-2 items-center">
          <div className="">
            <Image
              width={14}
              height={14}
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
              width={14}
              height={14}
              src="/assets/icons/download.png"
              alt="views"
            />{" "}
          </div>
          <span className="text-xs font-semibold">13</span>
        </div>
        <span className="text-[#CFCFCF]">|</span>
        <div className="flex gap-2 items-center">
          <div className="">
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.433252 11.8483V1.33333C0.433252 0.993399 0.553122 0.704884 0.795629 0.462377C1.03814 0.21987 1.32665 0.1 1.66659 0.1H8.33325C8.67319 0.1 8.9617 0.21987 9.20421 0.462377C9.44671 0.704884 9.56658 0.993399 9.56658 1.33333V11.8483L5.03931 9.90809L4.99992 9.8912L4.96053 9.90809L0.433252 11.8483ZM1.56659 9.96667V10.1185L1.70609 10.0585L4.99992 8.64219L8.29375 10.0585L8.43325 10.1185V9.96667V1.33333V1.23333H8.33325H1.66659H1.56659V1.33333V9.96667Z"
                fill="#014EE6"
                stroke="white"
                stroke-width="0.2"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="my-10 space-y-5">
        {comments.map((comment, index) => {
          return (
            <div
              className="rounded-lg border border-gray-300 shadow-md"
              key={index}
            >
              <Comments data={comment} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
