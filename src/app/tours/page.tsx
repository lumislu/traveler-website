import React from "react";
import { travelPlans } from "../data";
import Navbar from "../components/Navbar";

import Link from "next/link";

const list = () => {
  return (
    <div className=" h-full bg-gray-950 text-gray-300">
      <Navbar />
      <main className="text-center flex flex-col items-center justify-center p-6 ">
        <h1 className="text-xl mb-10">
          旅遊團
          <br />
          Tours List
        </h1>
        <div>
          {travelPlans.map((item) => (
            <a
              href="/tour"
              className="flex  bg-gray-200 w-full text-xs hover:bg-gray-200/90 "
            >
              <div className="text-gray-800 flex flex-col items-center  gap-2 p-4 border-b-2 w-full border-gray-300 sm:flex-row">
                <div className="flex flex-col p-4">
                  <p className=" font-semibold text-sm text-gray-600">
                    {item.month}
                  </p>
                  <div className="  text-sm text-gray-400">---</div>
                  <p className=" font-semibold text-lg text-gray-700">
                    {item.year}
                  </p>
                </div>
                <img className="h-20 sm:h-40" src={item.imageUrl} alt="" />
                <div className="flex flex-col w-full  gap-4 p-4">
                  <h1 className="text-lg ">{item.title}</h1>
                  <p>{item.summary}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default list;
