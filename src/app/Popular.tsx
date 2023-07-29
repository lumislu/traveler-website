import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
import { url } from "inspector";

const tours = [
  { url: "../Image/4.png", city: "Paris", country: "France" },
  { url: "../Image/5.png", city: "Hakone", country: "Japan" },
  { url: "../Image/6.png", city: "Platja de Muro", country: "Spain" },
  {
    url: "../Image/7.png",
    city: "Valley of Fire State Park",
    country: "United States",
  },
];

const Popular = () => {
  return (
    <>
      <div className=" h-screen flex flex-col items-center justify-evenly">
        <div className=" text-center p-8 ">
          <h2>POPULAR TOURS</h2>
          <p>熱門行程景點</p>
        </div>
        <div className="grid grid-cols-2  gap-2 p-5   h-3/5  w-full   sm:flex   sm:gap-6 lg:max-w-7xl">
          {tours.map((item, index) => (
            <div
              key={index}
              className=" h-full w-full bg-cover bg-center  cursor-pointer "
              style={{ backgroundImage: `url(${item.url}` }}
            >
              <div className="h-full w-full flex flex-col  items-center  justify-end  text-center  text-xs p-6 gap-2 font-semibold hover:justify-center  hover:bg-gray-200/40  hover:text-red-400">
                <p className="sm:text-base">{item.city}</p>
                <p>{item.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="h-screen flex flex-col  items-center justify-evenly bg-center bg-cover "
        style={{ background: "url(../Image/2.png)" }}
      >
        <div className=" flex flex-col  p-10 gap-6 lg:flex-row lg:items-end  ">
          <div className="flex flex-col max-w-xl  gap-6">
            <h1 className=" text-4xl font-extrabold">
              Unveil the World Embrace Your Adventure
            </h1>
            <a className="flex gap-4 p-2 hover:text-red-600" href="#">
              <FaRegPlayCircle className="text-2xl" />
              watch the vedio
            </a>
            <p className="text-sm">
              我們相信旅行是一種靈魂的探索，是心靈與世界的對話。無論是身歷其境的文字介紹、生動的圖片展示，還是獨特的旅遊建議，TRAVELER都將成為您旅行規劃不可或缺的指南。
              準備好了嗎？讓我們一同啟程吧！
            </p>
            <p className="hidden sm:flex">Platja de Muro</p>
          </div>
          <div className="  flex flex-col  gap-4 max-w-xs sm:flex-row  sm:max-w-lg ">
            <video controls className="w-full ">
              <source src="../vedio/1.mp4" type="video/mp4" />
            </video>
            <video controls className="w-full">
              <source src="../vedio/2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <footer className="flex  gap-4 text-3xl sm:text-4xl ">
          <a className=" hover:text-red-300" href="">
            <AiOutlineInstagram />
          </a>
          <a className=" hover:text-red-300" href="">
            <AiOutlineYoutube />
          </a>
          <a className=" hover:text-red-300" href="">
            <AiOutlineFacebook />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Popular;
