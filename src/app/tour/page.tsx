import { travelPlans } from "../data";
import { IoIosReturnLeft } from "react-icons/io";

const tour = () => {
  return (
    <div className="h-full flex  flex-col items-center justify-center gap-6 p-6 bg-black-300 text-gray-300  bg-gray-900  ">
      <a
        className=" absolute left-0 top-0  text-lg text-gray-700 p-2 bg-slate-50  hover:text-red-400 "
        href="/tours"
      >
        <IoIosReturnLeft />
      </a>
      <div className=" flex flex-col  items-center justify-center  gap-6 text-center w-full max-w-sm  text-gray-300 ">
        <h1 className="flex text-xl ">{travelPlans[0].title}</h1>
        <p className="flex text-xs">{travelPlans[0].summary} </p>
        <img
          className=" flex w-full max-w-lg"
          src={travelPlans[0].imageUrl}
          alt=""
        />
        <div className="text-xs  text-left flex flex-col gap-6 p-4 ">
          <p className="text-lg">價錢：{travelPlans[0].price} </p>
          <p className=" ">行程特色：{travelPlans[0].features} </p>
          <p className="">詳細行程：{travelPlans[0].details} </p>
          <p className=" ">注意事項：{travelPlans[0].notes} </p>
        </div>
      </div>
    </div>
  );
};

export default tour;
