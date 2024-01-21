"use client";
import { useForm } from "react-hook-form";

import React from "react";

const Input = (props) => {
  console.log(props);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex items-center justify-center w-full border p-1  rounded-md border-slate-300 hover:border-blue-300">
      <input
        {...register(props?.data?.name)}
        type={props.type}
        placeholder={props.placeholder}
        className=" w-full bg-transparent focus:outline-none placeholder-slate-500 text-slate-800 placeholder:text-slate-500 placeholder:text-sm placeholder:font-light"
      />
      <span className="cursor-pointer">{props.icon}</span>
    </div>
  );
};

export default Input;
