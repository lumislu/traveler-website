import React from "react";
import { travelPlans } from "../data";
import { IoIosReturnLeft } from "react-icons/io";
import Link from "next/link";

const list = () => {
  return (
    <div className="bg-gray-900 h-full flex flex-col p-10 gap-6 ">
      <a
        className=" absolute left-0 top-0  text-lg text-gray-700 p-2 bg-slate-50  hover:text-red-400 "
        href="/"
      >
        <IoIosReturnLeft />
      </a>
      <div className="text-2xl text-center">Tours List</div>
      {travelPlans.map((item) => (
        <a href="/tour" className="flex items-center justify-center border-2  text-xs rounded-lg p-4 gqp-2">
          <img className="w-20 h-20" src={item.imageUrl} alt="" />
          <div className="">
          <div>{item.title}</div>
          <div>{item.summary}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default list;
