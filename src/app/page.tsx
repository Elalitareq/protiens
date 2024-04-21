"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import hulk from "./assets/vector/hulk.svg";
import ProductListing from "./components/productsListing";
import CheckCodeModal from "./components/checkCodeModal";
import { productsArray } from "./lib/productsArray";
import { productImages } from "./assets/proteindImages/productsImages";
export default function Home() {
  const product = {
    id: 10,
    title: "New Method, New Technique",
    description:
      "Make your mix with our New Product Series , 1*10 ml Steroid Ampoule in addition of 2*5 ml empty glass vial helping you make your Mixture.",
    steroids: [
      "Testosterone Enanthate",
      "Testosterone Propionate",
      "Sustanon",
      "Nandrolone Decanoate",
      "Boldenone Cypionate ",
      "Trenbolone Acetate",
      "Trenbolone Enanthate",
      "Nandrolone PhenylPropionate",
    ],
  };
  return (
    <>
      <div className="w-full h-screen hero ">
        <div className="hero-text h-full flex flex-col md:flex-row items-center flex-wrap pt-12 gap-8  justify-evenly">
          <div className="w-full lg:w-1/2">
            <Image
              src={hulk}
              layout="responsive"
              height="250"
              width="300"
              alt="Hulk Pharma Logo"
            />
          </div>
          <div className="w-full lg:w-[40%] px-6 ">
            <h1 className="text-4xl  font-extrabold text-clean-white   text-center ">
              High Quality
              <span className="text-vibrant-green "> Anabolic Steroids</span>
            </h1>
            <h2 className="text-2xl text-vibrant-green-light text-center px-3">
              We care about the ESSENTIALS.
            </h2>
          </div>
        </div>
      </div>

      <article
        className={`product-item flex flex-col items-center justify-center py-16   bg-new-black-green`}
      >
        <h2 className="text-shadow text-3xl font-bold text-center text-vibrant-green my-4 px-4 drop-shadow-2xl  ">
          {product.title}
        </h2>
        <div className={` rounded-md  text-center relative bg-new-black`}>
          <div className="relative w-[17rem] h-[17rem] bg-white rounded-t overflow-hidden">
            <Image
              src={productImages[product.id]}
              layout="responsive"
              height={200}
              width={200}
              alt={product.description}
            />

            <div className="bg-hero-transparent absolute inset-0 w-full h-full " />
            <div className="bg-hero-transparent2 absolute inset-0 w-full h-full " />
            <div className="bg-hero-transparent3 absolute inset-0 w-full h-full " />
            <div className="bg-hero-transparent4 absolute inset-0 w-full h-full " />
          </div>

          {/* <p className="text-white my-2 w-[17rem] px-4 text-xs">{product.description}</p> */}
        </div>
        <h3 className="text-lg font-bold text-center text-[#eee] my-4 px-4">
          {product.description}
        </h3>
        <ul className="text-white my-2 px-4 text-xs columns-2">
          {product.steroids.map((steroid) => (
            <li key={steroid} className="mb-2">
              {steroid}
            </li>
          ))}
        </ul>
      </article>

      <ProductListing products={productsArray} />
      <CheckCodeModal />
    </>
  );
}
