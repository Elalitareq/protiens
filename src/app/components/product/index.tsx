'use client'
import React from "react";
import Image from "next/image";

interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  index: number;
  onEditClick?: (product: ProductProps["product"]) => void;
  editable?: boolean;
}

const Product: React.FC<ProductProps> = ({
  product,
  index,
  editable,
  onEditClick,
}) => {
  return (
    <article
      className={`product-item flex flex-col items-center justify-center py-16  ${
        index % 2 === 0 ? "bg-new-black" : "bg-new-black-green"
      }`}
    >
      <div
        className={`shadow shadow-gray-900 rounded-md  text-center relative ${
          index % 2 === 0 ? "bg-new-black-green" : "bg-new-black"
        }`}
      >
        {editable && (
          <span
            className="absolute right-4 top-4 cursor-pointer bg-transparent active:bg-[#00000020] rounded"
            onClick={() => onEditClick && onEditClick(product)}
          >
            <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
    </svg>
          </span>
        )}
        <div className="w-[17rem] h-[17rem]  bg-white rounded-t p-5">
          <Image
            src={product.image}
            layout="responsive"
            height={200}
            width={200}
            alt={product.name}
          />
        </div>
        <h3 className="text-2xl font-bold text-[#eee] mt-4 px-4">
          {product.name}
        </h3>
        <p className="text-white my-2 w-[17rem] px-4">{product.description}</p>
      </div>
    </article>
  );
};

export default Product;
