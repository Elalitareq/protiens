'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";

const CheckCodeModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [codeStatus, setCodeStatus] = useState<"correct" | "incorrect" | null>(null);
  const [showCheck, setShowCheck] = useState(false);

  const handleCheckCode = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Replace this with your code verification logic
    // Set the codeStatus to "correct" or "incorrect" based on the result
    const isCodeCorrect = false; // Replace with your code verification result
    setCodeStatus(isCodeCorrect ? "correct" : "incorrect");
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
    }, 2000);
  };

  const closeModal = () => {
    setOpen(false);
    setCode("");
    setCodeStatus(null);
  };

  return (
    <>
      <div className="w-full py-12 bg-new-black-green flex items-center justify-center">
        <button
          className="bg-vibrant-green-dark px-4 py-3 text-gray-100 rounded-md mt-4 font-bold active:bg-vibrant-green transition-colors duration-300"
          onClick={() => setOpen(true)}
        >
          Check Your Product
        </button>

        <div
          className={`fixed flex flex-col items-center justify-center bg-[#00000090] transition-all duration-300 overflow-hidden ${
            open ? "w-full h-full top-0 left-0" : "w-0 h-0 top-1/2 left-1/2"
          }`}
        >
          <div className="w-[95%] bg-gray-200 flex flex-col items-center p-4 rounded relative">
          <span
            className="top-4 right-4 text-black font-bold absolute font-sans cursor-pointer"
            onClick={closeModal}
          >
            X
          </span>

          <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
            {codeStatus === "correct" && (
              <motion.svg
                className={`text-green-500 text-6xl transition-opacity duration-500 ${
                  showCheck ? "opacity-100" : "opacity-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.2 130.2"
                style={{ strokeDashoffset: 1000 }}
              >
                <circle
                  className="path circle"
                  fill="none"
                  stroke="#73AF55"
                  strokeWidth="6"
                  strokeMiterlimit="10"
                  cx="65.1"
                  cy="65.1"
                  r="62.1"
                />
                <motion.polyline
                  className="path check"
                  fill="green"
                  stroke="#73AF55"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="100.2,40.2 51.5,88.8 29.8,67.5"
                  style={{ strokeDashoffset: -100, strokeDasharray: 1000 }}
                  initial={{ strokeDashoffset: -100 }}
                  animate={{ strokeDashoffset: 900 }}
                />
              </motion.svg>
            )}
            {codeStatus === "incorrect" && (
              <motion.svg
                className="text-red-500 text-6xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.2 130.2"
              >
                <circle
                  className="path circle"
                  fill="none"
                  stroke="#D06079"
                  strokeWidth="6"
                  strokeMiterlimit="10"
                  cx="65.1"
                  cy="65.1"
                  r="62.1"
                />
                <line
                  className="path line"
                  fill="none"
                  stroke="#D06079"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  x1="34.4"
                  y1="37.9"
                  x2="95.8"
                  y2="92.3"
                />
                <line
                  className="path line"
                  fill="none"
                  stroke="#D06079"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  x1="95.8"
                  y1="38"
                  x2="34.4"
                  y2="92.2"
                />
              </motion.svg>
            )}
          </div>
          <form className=" p-8 mt-4 flex flex-col items-center" onSubmit={handleCheckCode}>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter your code"
              className="w-full p-2 border border-gray-400 rounded-md"
            />
            <button
            type="submit"
              className="bg-vibrant-green-dark px-4 py-3 text-gray-100 rounded-md font-bold active:bg-vibrant-green transition-colors duration-300 mt-4"
            >
              Check
            </button>
           
            <h2 className="text-xl text-center text-gray-900 mt-4 transition duration-500">
              {codeStatus === "correct"
                ? "Your code is correct!"
                : codeStatus === "incorrect"
                ? "Your code is incorrect."
                : "HULK-Pharma"}
            </h2>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckCodeModal;
