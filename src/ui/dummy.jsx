// // ADMIN PAGE

// "use client";
// import UploadCardInfo from "@/components/uplodeinfo/uploadcardinfo";
// import Uplodeform from "@/components/uplodeinfo/uplodeform";
// import React, { useEffect, useState } from "react";

// const AdminDashboard = () => {
//   const [movieData, setMovieData] = useState([]);

//   useEffect(() => {}, [movieData]);

//   return (
//     <div>
//       {console.log("MovieData----", movieData)}
//       <div className="hidden sm:inline md:inline-grid lg:inline-grid xl:inline-grid  w-full grid grid-cols-1 sm:grid-cols-12 gap-2">
//         <div className=" sm:col-span-8">
//           {/* <UploadCardInfo movieData={movieData} setMovieData={setMovieData} /> */}
//           {movieData?.map((movieInfo) => (
//             <UploadCardInfo key={movieInfo.id} movieInfo={movieInfo} />
//           ))}
//         </div>
//         <div className="w-full sm:col-span-4 sticky top-14">
//           <Uplodeform movieData={movieData} setMovieData={setMovieData} />
//         </div>
//       </div>
//       <div className="w-full sm:hidden md:hidden lg:hidden xl:hidden grid grid-cols-1 sm:grid-cols-12 gap-2">
//         <div className=" sm:col-span-8">
//           <Uplodeform />
//         </div>
//         <div className="w-full sm:col-span-4">
//           <UploadCardInfo />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// // UPLODE CARD INFO

// "use client";
// import Image from "next/image";
// import React, { useEffect } from "react";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { GrUpdate } from "react-icons/gr";

// const UploadCardInfo = ({ movieInfo }) => {
//   useEffect(() => {}, [movieInfo]);

//   return (
//     <div className="my-5">
//       {("Upload cArd Info Movie", movieInfo)}
//       <div className="h-[140px] w-full rounded-md shadow-md border p-2 flex justify-between gap-3 bg-white ">
//         <div className="w-full flex gap-2 ">
//           <div className="basis-1/6 flex  items-center justify-center">
//             <Image
//               src="https://who.ibomma.link/wp-content/uploads/2024/01/90s-Middle-Class-Biopic-Telugu-fmp2v-2024-230x345.jpg"
//               width={70}
//               height={100}
//               alt="movie image"
//             />
//           </div>
//           <div className="basis-5/6 flex flex-col justify-between gap-1">
//             <div className="">
//               <h1 className="font-bold capitalize">{movieInfo?.title}</h1>
//               <p className="font-semibold text-[10px]">2024</p>
//               <p className="text-[10px]">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
//                 eveniet excepturi, laborum nostrum sit maiores voluptatum unde
//                 accusantium, aperiam repellat iste? Neque quibusdam voluptatibus
//                 illum magnam eligendi rerum fugit debitis?
//               </p>
//             </div>
//             <div className="flex gap-2 justify-end items-end ">
//               <div className="flex items-center justify-center gap-1 bg-blue-400 rounded-md  px-1 text-white font-semibold hover:bg-blue-700">
//                 <GrUpdate className="text-[12px]" />
//                 <button className="text-sm font-light">update</button>
//               </div>
//               <div className="flex items-center justify-center gap-1 bg-red-400 rounded-md  px-1 text-white font-semibold hover:bg-red-700">
//                 <RiDeleteBin6Line className="text-[12px]" />
//                 <button className="text-sm font-light">remove</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       ;
//     </div>
//   );
// };

// export default UploadCardInfo;

// // UPLODE CARD FORM

// "use client";
// import Input from "@/ui/input";
// import React, { useState } from "react";
// // import { useContext } from "react";
// // import { GlobalContext } from "@/context/context";

// const data = [
//   {
//     title: "img",
//     type: "text",
//     placeholder: "enter movie image...",
//   },
//   {
//     title: "title",
//     type: "text",
//     placeholder: "enter movie title...",
//   },
//   {
//     title: "year",
//     type: "text",
//     placeholder: "enter movie year...",
//   },
//   {
//     title: "zoner",
//     type: "text",
//     placeholder: "enter movie zoner...",
//   },
//   {
//     title: "cast",
//     type: "text",
//     placeholder: "enter movie cast...",
//   },
//   {
//     title: "director",
//     type: "text",
//     placeholder: "enter movie director...",
//   },
//   {
//     title: "trailer",
//     type: "text",
//     placeholder: "enter movie trailer...",
//   },
// ];

// const textareaData = [
//   {
//     title: "synopsis",
//     placeholder: "enter movie synopsis...",
//   },
//   {
//     title: "description",
//     placeholder: "enter movie description...",
//   },
// ];

// const Uplodeform = ({ movieData, setMovieData }) => {
//   // const {
//   //   data,
//   //   textareaData,
//   //   inputValue,
//   //   setInputValue,
//   //   handleChangeInput,
//   //   handleSubmit,
//   // } = useContext(GlobalContext);

//   const initalInputState = {
//     img: "",
//     title: "",
//     year: "",
//     zoner: "",
//     cast: "",
//     director: "",
//     trailer: "",
//   };
//   const [inputValue, setInputValue] = useState(initalInputState);

//   const handleChangeInput = (e) => {
//     // setInputValue(e.target.value);
//     setInputValue((prev) => {
//       console.log("Input Prev", prev, e.target.name, e.target.value);
//       let oldInput = prev;
//       oldInput[e.target.name] = e.target.value;
//       return oldInput;
//     });
//     console.log("Input Value", inputValue);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("inputValue", inputValue);
//     setMovieData((prev) => {
//       console.log("PRev", prev);
//       prev.push(inputValue);
//       return prev;
//     });
//     setInputValue(initalInputState);
//     console.log("movieData", movieData);
//   };

//   return (
//     <div className="sm:sticky top-0">
//       <form className="flex flex-col gap-1 bg-white p-5 rounded-md shadow-lg border my-5 ">
//         <h1 className="text-center uppercase text-slate-700">
//           upload movie data
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//           {data?.map((e) => {
//             return (
//               <div key={e.placeholder}>
//                 <span className="font-light text-slate-500 text-[10px] capitalize">
//                   {e.title}
//                 </span>
//                 <Input
//                   value={inputValue[data?.title]}
//                   name={e.title}
//                   onChange={handleChangeInput}
//                   key={e.placeholder}
//                   type={e.type}
//                   placeholder={e.placeholder}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         {textareaData?.map((e) => {
//           return (
//             <div key={e.placeholder} className="flex flex-col">
//               <span className="font-light text-slate-500 text-[10px] capitalize">
//                 {e.title}
//               </span>
//               <textarea
//                 value={textareaData?.title}
//                 name={e.title}
//                 onChange={handleChangeInput}
//                 key={e.placeholder}
//                 className="border h-20 rounded-md p-2 focus:outline-none hover:border-blue-300 placeholder:text-slate-500 font-light"
//                 cols="30"
//                 rows="10"
//                 placeholder={e.placeholder}
//               />
//             </div>
//           );
//         })}
//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:opacity-85 py-2 rounded-md font-bold text-white tracking-[1px] text-lg my-3">
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Uplodeform;

//SUMAN

// "use client";
// import { useForm } from "react-hook-form";

// import React from "react";

// const Input = (props) => {
//   console.log(props);
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   return (
//     <div className="flex items-center justify-center w-full border p-1  rounded-md border-slate-300 hover:border-blue-300">
//       <input
//         {...register(props?.data?.name)}
//         type={props.type}
//         placeholder={props.placeholder}
//         className=" w-full bg-transparent focus:outline-none placeholder-slate-500 text-slate-800 placeholder:text-slate-500 placeholder:text-sm placeholder:font-light"
//       />
//       <span className="cursor-pointer">{props.icon}</span>
//     </div>
//   );
// };

// export default Input;

//////////////////////////////////////////////

// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// const uplodeInputData = [
//   {
//     labelName: "image",
//     name: "image",
//     type: "text",
//     placeholder: "enter movie image...",
//   },
//   {
//     labelName: "title",
//     name: "title",
//     type: "text",
//     placeholder: "enter movie labelName...",
//   },
//   {
//     labelName: "year",
//     name: "year",
//     type: "text",
//     placeholder: "enter movie year...",
//   },
//   {
//     labelName: "zoner",
//     name: "zoner",
//     type: "text",
//     placeholder: "enter movie zoner...",
//   },
//   {
//     labelName: "cast",
//     name: "cast",
//     type: "text",
//     placeholder: "enter movie cast...",
//   },
//   {
//     labelName: "director",
//     name: "director",
//     type: "text",
//     placeholder: "enter movie director...",
//   },
//   {
//     labelName: "trailer",
//     name: "trailer",
//     type: "text",
//     placeholder: "enter movie trailer...",
//   },
//   {
//     labelName: "synopsis",
//     name: "synopsis",
//     placeholder: "enter movie synopsis...",
//   },
//   {
//     labelName: "description",
//     name: "description",
//     placeholder: "enter movie description...",
//   },
// ];

// // const textareaUplodeInputData = [
// //   {
// //     labelName: "synopsis",
// //     placeholder: "enter movie synopsis...",
// //   },
// //   {
// //     labelName: "description",
// //     placeholder: "enter movie description...",
// //   },
// // ];

// const UplodeForm = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="sm:sticky top-0">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-1 bg-white p-5 rounded-md shadow-lg border my-5 ">
//         <h1 className="text-center uppercase text-slate-700">
//           upload movie data
//         </h1>
//         <div
//           // onSubmit={handleSubmit(onSubmit)}
//           className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//           {uplodeInputData?.map((e) => {
//             return (
//               <div key={e.placeholder}>
//                 <span className="font-light text-slate-500 text-[10px] capitalize">
//                   {e.labelName}
//                 </span>

//                 <div className="flex items-center justify-center w-full border p-1  rounded-md border-slate-300 hover:border-blue-300">
//                   <input
//                     {...register(e?.name)}
//                     type={e.type}
//                     placeholder={e.placeholder}
//                     className=" w-full bg-transparent focus:outline-none placeholder-slate-500 text-slate-800 placeholder:text-slate-500 placeholder:text-sm placeholder:font-light"
//                   />
//                   <span className="cursor-pointer">{e.icon}</span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {/* {textareaUplodeInputData?.map((e) => {
//           return (
//             <div key={e.placeholder} className="flex flex-col">
//               <span className="font-light text-slate-500 text-[10px] capitalize">
//                 {e.labelName}
//               </span>
//               <textarea
//                 key={e.placeholder}
//                 className="border h-20 rounded-md p-2 focus:outline-none hover:border-blue-300 placeholder:text-slate-500 font-light"
//                 cols="30"
//                 rows="10"
//                 placeholder={e.placeholder}
//               />
//             </div>
//           );
//         })} */}
//         <button
//           type="submit"
//           className="bg-blue-500 hover:opacity-85 py-2 rounded-md font-bold text-white tracking-[1px] text-lg my-3">
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UplodeForm;

/////////////////
////////////////////////////
////////////////////////////////////

// import { useContext } from "react";
// import { GlobalContext } from "@/context/context";
// const { handleChange, handleClieck } = useContext(GlobalContext);
// <UplodeForm handleChange={handleChange} handleClieck={handleClieck} />;
// <UplodeForm handleChange={handleChange} handleClieck={handleClieck} />;

// in dashboard page above


