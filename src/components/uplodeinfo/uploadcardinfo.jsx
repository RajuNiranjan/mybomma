"use client";
import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

const UploadCardInfo = () => {
  return (
    <div className="my-5">
      <div className="h-28 w-full rounded-md shadow-md border p-2 flex justify-between gap-3 bg-white">
        <div className="w-full flex gap-2 ">
          <div className="basis-1/6 flex  items-center justify-center">
            <Image
              src="https://who.ibomma.link/wp-content/uploads/2024/01/90s-Middle-Class-Biopic-Telugu-fmp2v-2024-230x345.jpg"
              width={70}
              height={100}
              alt="movie image"
            />
          </div>
          <div className="basis-5/6 flex flex-col justify-between gap-1">
            <div className="">
              <h1 className="font-bold capitalize">
                90s middle class memories
              </h1>
              <p className="font-semibold text-[10px]">2024</p>
              <p className="text-[10px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
                commodi. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Neque, commodi. Lorem ipsum dolor, sit amet consectetur
              </p>
            </div>
            <div className="flex gap-2 justify-end items-end ">
              <div className="flex items-center justify-center gap-1 bg-blue-400 rounded-md  px-1 text-white font-semibold hover:bg-blue-700">
                <GrUpdate className="text-[12px]" />
                <button className="text-sm font-light">update</button>
              </div>
              <div className="flex items-center justify-center gap-1 bg-red-400 rounded-md  px-1 text-white font-semibold hover:bg-red-700">
                <RiDeleteBin6Line className="text-[12px]" />
                <button className="text-sm font-light">remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCardInfo;
