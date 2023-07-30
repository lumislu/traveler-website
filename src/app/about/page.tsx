import React from "react";
import { FaHiking } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const about = () => {
  return (
    <div className=" h-screen bg-gray-950 text-gray-300">
      <Navbar />
      <main className="text-center flex flex-col items-center justify-center gap-10 p-6 ">
        <h1 className="text-xl">
          關於我們
          <br />
          ABOUT US
        </h1>
        <a
          href="#"
          className="flex text-4xl  text-gray-300   hover:text-red-400"
        >
          <FaHiking className="w-4xl h-4xl" />
          <span className="font-medium">TRAVELER</span>
        </a>
        <p className="max-w-lg text-sm">
          TRAVELER
          是一家領先的旅遊公司，致力於為世界各地的冒險家提供難忘的旅遊體驗。我們的使命是通過旅行激發和豐富人們的生活，讓他們擁抱世界的奇蹟，探索新的視野。
        </p>
        <Footer />
      </main>
    </div>
  );
};

export default about;
