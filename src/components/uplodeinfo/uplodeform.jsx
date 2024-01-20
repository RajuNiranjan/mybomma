import Input from "@/ui/input";
import React from "react";

const data = [
  {
    title: " image URL",
    type: "text",
    placeholder: "enter movie image...",
  },
  {
    title: " title",
    type: "text",
    placeholder: "enter movie title...",
  },
  {
    title: "released year",
    type: "text",
    placeholder: "enter movie year...",
  },
  {
    title: " zoner",
    type: "text",
    placeholder: "enter movie zoner...",
  },
  {
    title: " cast",
    type: "text",
    placeholder: "enter movie cast...",
  },
  {
    title: " director",
    type: "text",
    placeholder: "enter movie director...",
  },
  {
    title: "trailer link",
    type: "text",
    placeholder: "enter movie trailer...",
  },
];

const textareaData = [
  {
    title: "synopsis",
    placeholder: "enter movie synopsis...",
  },
  {
    title: "description",
    placeholder: "enter movie description...",
  },
];

const Uplodeform = ({ movieData, setMovieData }) => {
  const addMovie = (movieInfo) => {
    setMovieData((prev) => {
      return { ...prev, movieInfo };
    });
  };

  return (
    <div className="sm:sticky top-0">
      <form className="flex flex-col gap-1 bg-white p-5 rounded-md shadow-lg border my-5 ">
        <h1 className="text-center uppercase text-slate-700">
          upload movie data
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {data?.map((e) => {
            return (
              <div key={e.placeholder}>
                <span className="font-light text-slate-500 text-[10px] capitalize">
                  {e.title}
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
        {textareaData?.map((e) => {
          return (
            <div key={e.placeholder} className="flex flex-col">
              <span className="font-light text-slate-500 text-[10px] capitalize">
                {e.title}
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
        <button className="bg-blue-500 hover:opacity-85 py-2 rounded-md font-bold text-white tracking-[1px] text-lg my-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default Uplodeform;
