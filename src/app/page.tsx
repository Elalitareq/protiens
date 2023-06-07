import Image from "next/image";
import hulk from "./assets/vector/hulk.svg";
import ProductListing from "./components/productsListing";
import CheckCodeModal from "./components/checkCodeModal"
export default function Home() {

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
      <ProductListing/>
      <CheckCodeModal/>
      
     
    </>
  );
}
