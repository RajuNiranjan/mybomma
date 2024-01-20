"use client";
import Input from "@/ui/input";
import React from "react";

const uplodeInputData = [
  {
    labelName: "img",
    type: "text",
    placeholder: "enter movie image...",
  },
  {
    labelName: "title",
    type: "text",
    placeholder: "enter movie labelName...",
  },
  {
    labelName: "year",
    type: "text",
    placeholder: "enter movie year...",
  },
  {
    labelName: "zoner",
    type: "text",
    placeholder: "enter movie zoner...",
  },
  {
    labelName: "cast",
    type: "text",
    placeholder: "enter movie cast...",
  },
  {
    labelName: "director",
    type: "text",
    placeholder: "enter movie director...",
  },
  {
    labelName: "trailer",
    type: "text",
    placeholder: "enter movie trailer...",
  },
];

const textareaUplodeInputData = [
  {
    labelName: "synopsis",
    placeholder: "enter movie synopsis...",
  },
  {
    labelName: "description",
    placeholder: "enter movie description...",
  },
];

const UplodeForm = () => {
  return (
    <div className="sm:sticky top-0">
      <form className="flex flex-col gap-1 bg-white p-5 rounded-md shadow-lg border my-5 ">
        <h1 className="text-center uppercase text-slate-700">
          upload movie data
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {uplodeInputData?.map((e) => {
            return (
              <div key={e.placeholder}>
                <span className="font-light text-slate-500 text-[10px] capitalize">
                  {e.labelName}
                </span>
                <Input
                  key={e.placeholder}
                  type={e.type}
                  placeholder={e.placeholder}
                />
              </div>
            );
          })}
        </div>
        {textareaUplodeInputData?.map((e) => {
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
        })}
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
