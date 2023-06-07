import React from 'react'
import Image from "next/image";

const products = [
    {
      id: 1,
      name: "Product 1",
      description: "this is a test description for Product 1 or Product 2",
      image:
        "https://jymsupplementscience.com/cdn/shop/products/PRJ04BB_23882_121321_V1.1_Front-1200px_f2028dfa-3e7f-4877-8582-9d3eb7173e5b.png?v=1685557842",
    },
    {
      id: 2,
      name: "Product 2",
      description: "this is a test description for Product 1 or Product 2",
      image:
        "https://jymsupplementscience.com/cdn/shop/products/PRJ04BB_23882_121321_V1.1_Front-1200px_f2028dfa-3e7f-4877-8582-9d3eb7173e5b.png?v=1685557842",
    },
    {
      id: 3,
      name: "Product 3",
      description: "this is a test description for Product 1 or Product 2",
      image:
        "https://jymsupplementscience.com/cdn/shop/products/PRJ04BB_23882_121321_V1.1_Front-1200px_f2028dfa-3e7f-4877-8582-9d3eb7173e5b.png?v=1685557842",
    },
    // Add more products here...
  ];
  
  const ProductListing = () => {
    return (
      <div className="w-full">
      {products.map((product, index) => (
        <article
          key={product.id}
          className={`product-item flex flex-col items-center justify-center py-16 ${
            index % 2 === 0 ? "bg-new-black" : "bg-new-black-green"
          }`}
        >
          <div className={`shadow shadow-gray-900 rounded-md  text-center ${
            index % 2 === 0 ? "bg-new-black-green" : "bg-new-black"
          }`}>

          <div className="w-[17rem] h-[17rem]  bg-white rounded-t p-5">
            <Image
              src={product.image}
              layout="responsive"
              height={200}
              width={200}
              alt={product.name}
            />
          </div>
          <h3 className="text-2xl font-bold text-white mt-4 px-4">{product.name}</h3>
          <p className="text-white text-lg  my-2 w-[17rem] px-4 ">
            {product.description}
          </p>
          </div>
        </article>
      ))}

    </div>
    )
  }
  
  export default ProductListing