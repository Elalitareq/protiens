import Image from "next/image";
import hulk from "./assets/vector/hulk.svg";
export default function Home() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description:"this is a test description for Product 1 or Product 2",
      image:
        "https://jymsupplementscience.com/cdn/shop/products/PRJ04BB_23882_121321_V1.1_Front-1200px_f2028dfa-3e7f-4877-8582-9d3eb7173e5b.png?v=1685557842",
    },
    {
      id: 2,
      name: "Product 2",
      description:"this is a test description for Product 1 or Product 2",
      image:
        "https://jymsupplementscience.com/cdn/shop/products/PRJ04BB_23882_121321_V1.1_Front-1200px_f2028dfa-3e7f-4877-8582-9d3eb7173e5b.png?v=1685557842",
    },
    {
      id: 3,
      name: "Product 3",
      description:"this is a test description for Product 1 or Product 2",
      image:
        "https://jymsupplementscience.com/cdn/shop/products/PRJ04BB_23882_121321_V1.1_Front-1200px_f2028dfa-3e7f-4877-8582-9d3eb7173e5b.png?v=1685557842",
    },
    // Add more products here...
  ];
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
      <div className="w-full">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`product-item flex flex-col items-center justify-center py-16 ${
              index % 2 === 0 ? "bg-new-black" : "bg-new-black-green"
            }`}
          >
            <h3 className="text-2xl font-bold text-white">{product.name}</h3>
            <div className="w-[17rem] h-[17rem] mt-4 bg-white rounded">
              
              <Image
                src={product.image}
                layout="responsive"
                height={200}
                width={200}
                alt={product.name}
              />
            </div>
            <p  className="text-white text-lg text-center mt-4 w-[17rem]">{product.description}</p>
          </div>
        ))}
      </div>
      <div className="w-full py-12 bg-new-black-green flex items-center justify-center">

      <button className="bg-vibrant-green px-4 py-3 text-gray-900 rounded-lg mt-4">Check Your Code</button>
      </div>

      
    </>
  );
}
