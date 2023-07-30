import React from "react";
import { travelPlans } from "../data";
import { IoIosReturnLeft } from "react-icons/io";
import Link from "next/link";

const list = () => {
  return (
    <div className=" h-screen flex flex-col p-10 gap-6 bg-slate-950 ">
      <a
        className=" absolute left-0 top-0  text-lg text-gray-700 p-2 bg-slate-50  hover:text-red-400 "
        href="/"
      >
        <IoIosReturnLeft />
      </a>
      <div className="text-2xl text-center ">Tours List</div>
      {travelPlans.map((item) => (
        <a href="/tour" className="flex items-center justify-center bg-gray-200  text-xs rounded-2xl p-2 gap-2">
          <img className="w-20 h-20 rounded-2xl" src={item.imageUrl} alt="" />
          <div className="text-gray-900 flex flex-col gap-2">
          <div>{item.title}</div>
          <div>{item.summary}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default list;
