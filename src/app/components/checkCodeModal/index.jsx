"use client";

import React from "react";
import { useState } from "react";

const CheckCodeModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full py-12 bg-new-black-green flex items-center justify-center">
        <button
          className="bg-vibrant-green-dark px-4 py-3 text-gray-100 rounded-md mt-4 font-bold active:bg-vibrant-green transition-colors duration-300"
          onClick={() => setOpen(true)}
        >
          Check Your Code
        </button>
        
          <div className={`fixed flex justify-center items-center bg-[#00000090]  transition-all duration-300 overflow-hidden ${open?"w-full h-full top-0 left-0":"w-0 h-0 top-1/2 left-1/2"}` }>
            <span className="top-4 right-4 text-white font-bold absolute font-sans" onClick={()=>setOpen(false)}>X</span>
            <div className="">

            <h2 className="text-2xl text-white">test</h2>
            </div>
          </div>

      </div>
    </>
  );
};

export default CheckCodeModal;
