"use client";
import UploadCardInfo from "@/components/uplodeinfo/uploadcardinfo";
import Uplodeform from "@/components/uplodeinfo/uplodeform";
import React, { useState } from "react";

const AdminDashboard = () => {
  const [movieData, setMovieData] = useState([]);
  return (
    <div>
      <div className="hidden sm:inline md:inline-grid lg:inline-grid xl:inline-grid  w-full grid grid-cols-1 sm:grid-cols-12 gap-2">
        <div className=" sm:col-span-8">
          {/* <UploadCardInfo movieData={movieData} setMovieData={setMovieData} /> */}
          <UploadCardInfo />
        </div>
        <div className="w-full sm:col-span-4 sticky top-14">
          <Uplodeform movieData={movieData} setMovieData={setMovieData} />
        </div>
      </div>
      <div className="w-full sm:hidden md:hidden lg:hidden xl:hidden grid grid-cols-1 sm:grid-cols-12 gap-2">
        <div className=" sm:col-span-8">
          <Uplodeform />
        </div>
        <div className="w-full sm:col-span-4">
          <UploadCardInfo />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
