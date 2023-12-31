"use client";
import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import { FaHiking, FaSearch } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../data";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav>
      <div
        className="flex items-center justify-between p-6 lg:justify-center lg:mx-20   "
        aria-label="Global"
      >
        <div className="flex ">
          <a
            href="/"
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
  );
};

export default Navbar;
