"use client";
import { useState, useEffect } from "react";

import { FaArrowRight, FaRegPlayCircle } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import { bgImages, headerListMore, tours } from "./data";
import React from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isPaused) {
      timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
      }, 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, isPaused]);

  const handleBgClick = (id: string) => {
    setIsPaused(true);
    setCurrentIndex(parseInt(id) - 1);
    setIsPaused(false);
  };
  return (
    <div>
      <header
        className="h-screen flex flex-col bg-cover bg-center  "
        style={{ backgroundImage: `url(${bgImages[currentIndex].url}` }}
      >
        <Navbar />
        <div className=" flex h-full flex-col  justify-center ">
          <div className=" flex w-full  flex-col justify-between items-center  sm:flex-row sm:justify-between ">
            <div className=" max-w-4xl text-center px-4  lg:text-left lg:pl-20">
              <h1 className="text-4xl font-bold  text-gray-300 sm:text-6xl lg:text-8xl">
                Embrace Your Adventure
              </h1>
              <p className="mt-6 text-xs  font-light text-gray-300 lg:text-lg">
                無論您是喜愛挑戰極限的探險家、尋找文化交流的歷史愛好者，或者只是想要逃離繁囂，享受寧靜片刻的旅行者，TRAVELER都將成為您最值得信賴的旅遊夥伴。
              </p>
            </div>
            <div className="flex  items-center justify-center text-center w-full  sm:flex-col sm:w-20  lg:w-40 ">
              {bgImages.map((index) => (
                <button
                  key={index.id}
                  className={`flex  items-center justify-center text-xs  text-gray-300 px-4 py-2 w-full hover:text-red-400 sm:text-lg lg:pr-0 lg:gap-3  ${
                    currentIndex === parseInt(index.id) - 1
                      ? "text-xl bg-gray-400/40 sm:text-2xl lg:text-3xl lg:bg-transparent"
                      : ""
                  }`}
                  onClick={() => handleBgClick(index.id)}
                >
                  {index.id}
                  <div
                    className={`${
                      currentIndex === parseInt(index.id) - 1
                        ? "lg:border-2 border-gray-100 sm:flex sm:w-full"
                        : "hidden"
                    }`}
                  ></div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex  h-30 p-2 items-center mb-10  lg:justify-center ">
          {headerListMore.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col text-center justify-center p-4 h-full border-b-2 hover:border-red-400 hover:bg-gray-900/40 "
              >
                <div className=" text-xs flex flex-col items-center justify-center  gap-2 text-gray-300 lg:text-sm lg:flex-row">
                  <item.icon className="w-8 h-6 lg:w-12 lg:h-10" />
                  <p className=" max-w-sm sm:px-2">{item.content}</p>
                </div>
                <a
                  href={item.href}
                  className="flex items-center justify-center lg:gap-1 lg:mt-2 hover:text-red-400 "
                >
                  <p className="hidden lg:flex">MORE DETAILS</p>
                  <FaArrowRight className=" w-8 h-8 p-2 text-gray-300  hover:text-red-400" />
                </a>
              </div>
            );
          })}
        </div>
      </header>
      <div
        id="popular-tours"
        className=" h-screen  bg-gray-950 flex flex-col items-center justify-evenly"
      >
        <div className=" text-center p-8 text-gray-300 ">
          <h2>POPULAR TOURS</h2>
          <p>熱門行程景點</p>
        </div>
        <div className="grid grid-cols-2  gap-2 p-5   h-3/5  w-full   sm:flex   sm:gap-6 lg:max-w-7xl">
          {tours.map((item, index) => (
            <a
              key={index}
              className=" h-full w-full bg-cover bg-center  cursor-pointer "
              style={{ backgroundImage: `url(${item.url}` }}
              href={item.href}
            >
              <div className="h-full w-full flex flex-col  items-center  justify-end  text-center text-gray-300  text-xs p-6 gap-2 font-semibold hover:justify-center  hover:bg-gray-200/40  hover:text-red-400">
                <p className="sm:text-base">{item.city}</p>
                <p>{item.country}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div
        className=" h-screen flex flex-col items-center justify-evenly bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(../Image/2.png)" }}
      >
        <div className=" p-8 gap-8 flex flex-col items-center justify-center sm:items-end sm:flex-row">
          <div className="flex flex-col  gap-4 ">
            <h1 className=" text-4xl font-extrabold text-gray-300 sm:text-5xl lg:text-6xl">
              Unveil the World Embrace Your Adventure
            </h1>
            <a
              className=" flex gap-4 p-2 text-gray-300 hover:text-red-600"
              href="https://www.youtube.com"
            >
              <FaRegPlayCircle className="text-2xl" />
              watch the vedio
            </a>
            <p className=" text-sm text-gray-300">
              我們相信旅行是一種靈魂的探索，是心靈與世界的對話。無論是身歷其境的文字介紹、生動的圖片展示，還是獨特的旅遊建議，TRAVELER都將成為您旅行規劃不可或缺的指南。
              準備好了嗎？讓我們一同啟程吧！
            </p>
          </div>
          <div className=" flex justify-evenly max-w-lg sm:flex-row">
            <video controls className=" w-2/5">
              <source src="../vedio/1.mp4" type="video/mp4" />
            </video>
            <video controls className=" w-2/5  ">
              <source src="../vedio/2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
