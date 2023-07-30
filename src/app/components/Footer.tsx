import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" w-full max-w-lg flex items-center justify-evenly text-3xl text-gray-300 sm:text-4xl">
      <a className=" hover:text-red-300" href="https://www.instagram.com">
        <AiOutlineInstagram />
      </a>
      <a className=" hover:text-red-300" href="https://www.youtube.com">
        <AiOutlineYoutube />
      </a>
      <a className=" hover:text-red-300" href="https://www.facebook.com">
        <AiOutlineFacebook />
      </a>
    </footer>
  );
};

export default Footer;
