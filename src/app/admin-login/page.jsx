"use client";
import Input from "@/ui/input";
import React from "react";
import { FiLock } from "react-icons/fi";
import { BiShowAlt } from "react-icons/bi";
import { LuUserCircle } from "react-icons/lu";
import { useRouter } from "next/navigation";

const loginData = [
  {
    id: "1",
    name: "user name",
    type: "text",
    icon: <LuUserCircle />,
    icon2: "",
  },
  {
    id: "2",
    name: "password",
    type: "password",
    icon: <FiLock />,
    icon2: <BiShowAlt className="text-slate-400 hover:text-slate-600" />,
  },
];

const AdminLogin = () => {
  const router = useRouter();

  const navigateAdminDashBoard = () => {
    router.push("/admin-dashboard");
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" flex flex-col gap-4 w-[500px] justify-center bg-white p-5 rounded-md border shadow-md">
        <h1 className="text-center font-semibold text-2xl text-blue-400 tracking-[1px]">
          Admin Login{" "}
        </h1>
        {loginData?.map((e) => (
          <div key={e.id} className="flex items-center gap-2">
            <span className="text-xl text-slate-500">{e.icon}</span>
            <Input type="text" placeholder={e.name} icon={e.icon2} />
          </div>
        ))}
        <button
          onClick={navigateAdminDashBoard}
          className="bg-blue-500 text-white rounded-md py-1 font-semibold tracking-wide">
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
