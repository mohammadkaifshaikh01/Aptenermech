
"use client";
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { RiResetRightFill } from "react-icons/ri";
import { increase, decrease, reset } from "./redux/counterSlice";  
import { useSelector, useDispatch } from 'react-redux';
import { useState,useEffect } from "react";

export default function Home() {
  const counter = useSelector((e) => e.counter.value); 
  const dispatch = useDispatch(); 
  const [auto, setAuto] = useState(false);

 
  useEffect(() => {
    if (auto) {
      const time = setInterval(() => {
        dispatch(increase());
      }, 1000); 
      return () => clearInterval(time); 
    }
  }, [auto, dispatch]);

  return (
    <div className="  items-center justify-items-center min-h-screen p-8 pb-10 gap-15 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    
    <h1 className="text-center text-3xl text-gray-500 mb-6 font-semibold">Count : {counter}</h1>
    
      <div>
        
        <div className="flex justify-center items-center gap-5 h-full">
        
          <div className="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
            <button onClick={() => dispatch(increase())} className="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-md active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]">
              <div className="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-4 py-4">
                <div className="flex gap-2 items-center">
                  <FaPlus className="text-xl" />
                </div>
              </div>
            </button>
          </div>
          
          <div className="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
            <button onClick={() => dispatch(reset())} className="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-md active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]">
              <div className="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-4 py-4">
                <div className="flex gap-2 items-center">
                  <RiResetRightFill className="text-xl" />
                </div>
              </div>
            </button>
          </div>
    
          <div className="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
            <button onClick={() => dispatch(decrease())} className="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-md active:shadow-[0,0px,1px_rgba(0,0,0,0.5)] active:scale-[0.995]">
              <div className="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-4 py-4">
                <div className="flex gap-2 items-center">
                  <FaMinus className="text-xl" />
                </div>
              </div>
            </button>
          </div>
        </div>
    
        <div className="flex justify-center items-center mt-4"> 
          <div className="text-center">
            <h2 className="mb-2 text-lg font-semibold">Auto Increment</h2> 
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={auto}
                onChange={() => setAuto(!auto)} 
              />
              <div className="group peer ring-0 bg-gradient-to-tr from-rose-100 via-rose-400 to-rose-500 rounded-full outline-none duration-300 after:duration-300 w-24 h-12 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0 peer-checked:bg-gradient-to-tr peer-checked:from-green-100 peer-checked:via-lime-400 peer-checked:to-lime-500">
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
