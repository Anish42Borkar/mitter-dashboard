"use client";
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical
} from "lucide-react";
import { createContext, useContext, useState } from "react";
import {
  BookSvg,
  FileSvg,
  GraphSvg,
  LogoSvg,
  NoteSvg,
  QuestionMarkSvg,
  UserSvg,
} from "../svg";

const SidebarContext = createContext(null as any);

export default function Sidebar({ children }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`h-screen z-20 ${expanded ? "w-60" : "w-16"} fixed top-0`}
    >
      <nav className="h-full flex flex-col bg-white shadow-xl">
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          /> */}

          <div className="flex gap-2 items-center">
            <LogoSvg />{" "}
            <p
              className={`overflow-hidden transition-all font-bold text-2xl italic text-[#014EE6] ${
                expanded ? "w-32" : "w-0"
              }`}
            >
              Mitter
            </p>
          </div>

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="py-5 rounded-lg bg-white  absolute top-1/2 -translate-y-1/2 -right-2"
          >
            {expanded ? (
              <ChevronLeft color="#014EE6" />
            ) : (
              <ChevronRight size={16} color="#014EE6" />
            )}
          </button>
        </div>

        <div className="w-[80%] mt-5 h-[1px] bg-[#47474733] mx-auto " />

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 mt-10">{children}</ul>
        </SidebarContext.Provider>

        <div className="mx-auto cursor-pointer mb-5 border-20 flex justify-center items-center gradient-border w-10 h-10">
          <FileSvg />
        </div>
        <div className="w-[80%] h-[1px] bg-[#47474733] mx-auto " />

        <div className=" flex p-3">
          <div className="border-2 cursor-pointer border-[#747474] flex justify-center items-center p-[1px] rounded-full">
            <UserSvg w={34} h={34} />
          </div>
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Rahul Sing</h4>
              <span className="text-xs text-gray-600">rahulsing@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }: any) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-2 mb-4
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
export function SidebarStruct() {
  return (
    <Sidebar>
      <>
        <SidebarItem
          icon={<QuestionMarkSvg w={25} h={25} />}
          text={"Dashboard"}
          active
        />
        <SidebarItem icon={<NoteSvg w={25} h={25} />} text={"Notes"} />
        <SidebarItem icon={<BookSvg w={25} h={25} />} text={"Bookmarks"} />
        <SidebarItem icon={<GraphSvg w={25} h={25} />} text={"Growth"} />
      </>
    </Sidebar>
  );
}
