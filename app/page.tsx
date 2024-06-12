"use client";
import Badge from "@/components/badge";
import Button from "@/components/button";
import Card from "@/components/card";
import Input from "@/components/input";
import { cardData } from "@/constant";
import Image from "next/image";

const tagList = [
  "Innterview",
  "Strategy",
  "Economics",
  "Sociology",
  "Indian History",
  "Strategy",
  "Sociology",
  "Poliity",
  "Indian History",
  "Strategy",
  "Sociology",
  "Poliity",
  "Indian History",
  "Strategy",
  "Sociology",
  "Poliity",
];

function Magnify() {
  return (
    <div className="h-fit w-fit mx-2">
      <Image width={16} height={16} src="/assets/icons/zoom.png" alt="views" />{" "}
    </div>
  );
}

export default function Home() {
  return (
    <div className=" px-7 flex flex-col lg:flex-row gap-10   ">
      <div>
        <div className="my-10">
          <p className="text-xl font-semibold">Community</p>
          <div className="flex justify-between ">
            <div className="flex gap-3 my-8">
              <Badge
                onClick={(e) => {
                  (e.target as HTMLElement).classList.toggle("active");
                }}
                title="All"
              />
              <Badge
                title="Preparation Strategy"
                onClick={(e) => {
                  (e.target as HTMLElement).classList.toggle("active");
                }}
              />
              <Badge
                title="Interview Experience"
                onClick={(e) => {
                  (e.target as HTMLElement).classList.toggle("active");
                }}
              />
            </div>
            <Button>
              <div className="flex items-center gap-2 px-2">
                <Image
                  width={16}
                  height={16}
                  src="/assets/icons/pen.png"
                  alt="views"
                />{" "}
                Write
              </div>
            </Button>
          </div>

          <div className="h-[1.5px] bg-[#47474733] " />
        </div>
        <div className="space-y-8">
          {cardData.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="w-12/12 lg:w-5/12 my-10">
        <div className="W-[389px] h-[107px] gradient-fire rounded-lg flex flex-col gap-4 justify-center items-center">
          <p className=" font-bold">
            Achieve Your Goals with Keep The Streak Alive
          </p>

          <Button varient="orange">Start Practicing</Button>
        </div>

        <div className="w-[389px] h-[291px] p-5 mx-auto mt-10 border border-[#47474733] rounded-lg">
          <p className="font-semibold mb-8">Tags</p>

          <Input placeholder="Search for tag" icon={<Magnify />} />

          <div className="flex flex-wrap gap-3 mt-6">
            {tagList.map((tag, index) => (
              <Badge title={tag} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
