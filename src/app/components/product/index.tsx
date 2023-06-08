import React from 'react';
import Image from 'next/image';

interface ProductProps {
  product: {
    _id: number;
    name: string;
    description: string;
    image: string;
  };
  index: number;
}

const Product: React.FC<ProductProps> = ({ product, index }) => {
  return (
    <article
      className={`product-item flex flex-col items-center justify-center py-16 ${
        index % 2 === 0 ? 'bg-new-black' : 'bg-new-black-green'
      }`}
    >
      <div
        className={`shadow shadow-gray-900 rounded-md  text-center ${
          index % 2 === 0 ? 'bg-new-black-green' : 'bg-new-black'
        }`}
      >
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
        <p className="text-white   my-2 w-[17rem] px-4">
          {product.description}
        </p>
      </div>
    </article>
  );
};

export default Product;
