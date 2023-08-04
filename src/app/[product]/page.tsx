import React from "react";
import { productsArray } from "../lib/productsArray";
import { productImages } from "../assets/proteindImages/productsImages";
import Image from "next/image";

const Product = ({ params }: { params: { product: String } }) => {
  const products = productsArray.filter(
    (product) => "" + product.id === params.product
  );
  const [product] = products;
  return (
    <>
      <div className=" pt-24 pb-10 px-4 min-h-screen bg-new-black-green w-full flex flex-col  items-center md:items-start">
        <Image
          src={productImages[product.id]}
          alt={product.name}
          width="300"
          height="500"
          className="w-full rounded-lg lg:w-[300px]"
        />
        <h2 className="text-2xl font-Roboto font-extrabold mt-6 mb-2">{product.name}</h2>
        <h4 className="my-3 text-gray-300 font-thin">
          <span className="text-xl font-bold text-white">Description:</span> <br />
          {product.longDescription}
        </h4>
        <h4 className="my-3 text-gray-300 font-thin">
          <span className="text-xl font-bold text-white">Benefits:</span> <br />
          {product.benefits}
        </h4>
        <h4 className="my-3 text-gray-300 font-thin">
          <span className="text-xl font-bold text-white">Usage:</span> <br />
          {product.usage}
        </h4>
      </div>
    </>
  );
};

export default Product;
