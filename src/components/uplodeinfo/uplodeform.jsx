"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const uplodeInputData = [
  {
    labelName: "image",
    name: "image",
    type: "text",
    placeholder: "enter movie image...",
  },
  {
    labelName: "title",
    name: "title",
    type: "text",
    placeholder: "enter movie labelName...",
  },
  {
    labelName: "year",
    name: "year",
    type: "text",
    placeholder: "enter movie year...",
  },
  {
    labelName: "zoner",
    name: "zoner",
    type: "text",
    placeholder: "enter movie zoner...",
  },
  {
    labelName: "cast",
    name: "cast",
    type: "text",
    placeholder: "enter movie cast...",
  },
  {
    labelName: "director",
    name: "director",
    type: "text",
    placeholder: "enter movie director...",
  },
  {
    labelName: "trailer",
    name: "trailer",
    type: "text",
    placeholder: "enter movie trailer...",
  },
  {
    labelName: "synopsis",
    name: "synopsis",
    placeholder: "enter movie synopsis...",
  },
  {
    labelName: "description",
    name: "description",
    placeholder: "enter movie description...",
  },
];

// const textareaUplodeInputData = [
//   {
//     labelName: "synopsis",
//     placeholder: "enter movie synopsis...",
//   },
//   {
//     labelName: "description",
//     placeholder: "enter movie description...",
//   },
// ];

const UplodeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="sm:sticky top-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-1 bg-white p-5 rounded-md shadow-lg border my-5 ">
        <h1 className="text-center uppercase text-slate-700">
          upload movie data
        </h1>
        <div
          // onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {uplodeInputData?.map((e) => {
            return (
              <div key={e.placeholder}>
                <span className="font-light text-slate-500 text-[10px] capitalize">
                  {e.labelName}
                </span>

                <div className="flex items-center justify-center w-full border p-1  rounded-md border-slate-300 hover:border-blue-300">
                  <input
                    {...register(e?.name)}
                    type={e.type}
                    placeholder={e.placeholder}
                    className=" w-full bg-transparent focus:outline-none placeholder-slate-500 text-slate-800 placeholder:text-slate-500 placeholder:text-sm placeholder:font-light"
                  />
                  <span className="cursor-pointer">{e.icon}</span>
                </div>
              </div>
            );
          })}
        </div>
        {/* {textareaUplodeInputData?.map((e) => {
          return (
            <div key={e.placeholder} className="flex flex-col">
              <span className="font-light text-slate-500 text-[10px] capitalize">
                {e.labelName}
              </span>
              <textarea
                key={e.placeholder}
                className="border h-20 rounded-md p-2 focus:outline-none hover:border-blue-300 placeholder:text-slate-500 font-light"
                cols="30"
                rows="10"
                placeholder={e.placeholder}
              />
            </div>
          );
        })} */}
        <button
          type="submit"
          className="bg-blue-500 hover:opacity-85 py-2 rounded-md font-bold text-white tracking-[1px] text-lg my-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default UplodeForm;
