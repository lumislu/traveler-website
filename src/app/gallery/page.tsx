import React from "react";
import { bgImages } from "../data";
import Navbar from "../components/Navbar";

const gallery = () => {
  return (
    <div className="flex flex-col gap-10 bg-gray-950 h-full p-2">
      <Navbar />
      <h1 className="text-xl text-center">
        旅遊紀錄
        <br />
        Gallery
      </h1>
      <div className="grid grid-cols-2 ">
        {bgImages.map((item) => (
          <div className="w-full h-full">
            <img className="w-full h-full" src={item.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default gallery;
