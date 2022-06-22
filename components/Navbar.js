import React from 'react'
import Head from "next/head";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { MdDownloadForOffline } from "react-icons/md";



const Navbar = () => {
  return (
    <>
    <div className="flex p-2 px-4 justify-between items-center w-full bg-white fixed border-b-2 border-[#3c4147]">
        <div>
          <a href="/">
            <h1 className="text-gray-600 text-1xl font-bold">NOTUS</h1>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <h1 className="demo text-xs  sm:block hidden cursor-pointer">
            DEMO PAGES
          </h1>
          <BsFacebook
            className="fill-[#94a3b8] sm:block hidden cursor-pointer hover:animate-bounce"
            size={20}
          />
          <AiFillTwitterCircle
            className="fill-[#94a3b8] sm:block hidden cursor-pointer hover:animate-bounce"
            size={24}
          />
          <AiFillGithub
            className="fill-[#94a3b8] sm:block hidden cursor-pointer hover:animate-bounce"
            size={24}
          />
          <div className="">
            <button className="flex gap-1 items-center transition duration-500 hover:shadow-lg shadow-cyan-500/50 text-sm py-2 rounded-md font-semibold bg-[#334155] px-4 text-white">
              <MdDownloadForOffline className="fill-white" size={16} />
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar