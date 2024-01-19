"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md px-10 py-2 md:py-4 sm:py-4 lg:py-4 xl:py-4 rounded-md">
      <div className="text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-sm">
        <Link href="/">Contact</Link>
        <span> | </span>
        <Link href="/">DMCA</Link>
        <span> | </span>
        <Link href="/">T&C</Link>
        <span> | </span>
      </div>
      <div>
        <h1 className="text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-sm">
          2024 myBOMMA
        </h1>
      </div>
    </div>
  );
};

export default Footer;
