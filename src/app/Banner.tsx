"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaHiking,
  FaSearch,
  FaMapMarkedAlt,
  FaArrowRight,
} from "react-icons/fa";
import { GiTreasureMap, GiMountainRoad, GiKnifeFork } from "react-icons/gi";
import Image from "next/image";

const bgImages = [
  { url: "../Image/2.png", id: "01" },
  { url: "../Image/bg1.png", id: "02" },
  { url: "../Image/7.png", id: "03" },
  { url: "../Image/8.png", id: "04" },
];
const navigation = [
  { name: "HOME", href: "#" },
  { name: "ABOUT", href: "#" },
  { name: "TOURS", href: "#popular-tours" },
  { name: "GALLERY", href: "#" },
  { name: "CONTACT", href: "#" },
];
const headerListMore = [
  {
    icon: GiTreasureMap,
    content:
      "引領您穿越歷史長河，追隨文明的足跡，讓您深刻領略人類智慧與創意的演化。",
    href: "#",
  },
  {
    icon: GiMountainRoad,
    content:
      "徜徉於壯麗的山脈、探索神秘的森林，讓您與大自然交融共鳴，找回內心的寧靜。",
    href: "#",
  },
  {
    icon: GiKnifeFork,
    content:
      "透過文化交流，品嚐道地美食、參與傳統節慶，讓您的旅程更加豐富多彩。",
    href: "#",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <nav>
          <div
            className="flex items-center justify-between p-6 lg:justify-center lg:mx-20   "
            aria-label="Global"
          >
            <div className="flex ">
              <a
                href="#"
                className="flex items-center justify-between -m-1.5 p-1.5  gap-2  text-gray-300   hover:text-red-400"
              >
                <FaHiking className="w-6 h-6" />
                <span className="font-medium">TRAVELER</span>
              </a>
            </div>

            <div className="flex lg:hidden ">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300   hover:text-red-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden box-border h-10 border-b-2  justify-center w-full max-w-7xl lg:mx-20  lg:flex  ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium  h-10 px-12  leading-10  text-gray-300  border-b-2 hover:border-red-400"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex  lg:justify-end">
              <a
                href="#"
                className="text-lg font-semibold leading-6 text-gray-300  hover:text-red-400"
              >
                <FaSearch />
              </a>
            </div>
          </div>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5 flex gap-1">
                  <FaHiking className="w-6 h-6 text-gray-900" />
                  <p className=" text-gray-900 font-medium">你要去哪裡？</p>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only ">Close menu</span>
                  <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </nav>
        <div className=" flex h-full flex-col  justify-center ">
          <div className=" flex w-full  flex-col justify-between items-center  sm:flex-row sm:justify-between ">
            <div className=" max-w-4xl text-center px-4  lg:text-left lg:pl-20">
              <h1 className="text-4xl font-bold  text-gray-300 sm:text-6xl lg:text-8xl">
                Embrace Your Adventure
              </h1>
              <p className="mt-6 text-base leading-8 font-light text-gray-300 lg:text-lg">
                無論您是喜愛挑戰極限的探險家、尋找文化交流的歷史愛好者，或者只是想要逃離繁囂，享受寧靜片刻的旅行者，TRAVELER都將成為您最值得信賴的旅遊夥伴。
              </p>
            </div>
            <div className="flex  items-center justify-center text-center w-full  sm:flex-col sm:w-20  lg:w-40 ">
              {bgImages.map((index) => (
                <button
                  key={index.id}
                  className={`flex  items-center justify-center text-sm px-4 py-2 w-full hover:text-red-400 sm:text-lg lg:pr-0 lg:gap-3  ${
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
                  <FaArrowRight className=" w-8 h-8 p-2 " />
                </a>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default Banner;
