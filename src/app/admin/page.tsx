"use client";

import { useSession } from "next-auth/react";
import React, { useState ,useEffect} from "react";
import ProductListing from "../components/productsListing";
import LoginForm from "../components/loginForm";
import { Toaster,toast } from "react-hot-toast";
import AddProductForm from "../components/addProductForm";
import { productsArray } from "../lib/productsArray";
interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
}
const Admin = () => {
  const { data: session, status } = useSession();
  const [openAdd, setOpenAdd] = useState(false);
  const [products,setProducts] = useState<Product[]|null>(productsArray)

  const onDeleteClick = (product: Product) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      fetch(`/api/product/${product.id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            // Product deleted successfully
            // You can update the product list or perform any other necessary actions
            toast.success("Product deleted successfully");
          } else {
            // Failed to delete the product
            toast.error("Failed to delete the product");
          }
        })
        .catch((error) => {
          // Error occurred while deleting the product
          toast.error("An error occurred while deleting the product");
          console.log(error);
        });
    }
  };
  const getProduct = ()=>{
    fetch("/api/product").then(res=>{
      return res.json()
    }).then((data)=>{
      if(data.error){

        setProducts(null)
      }else{

        setProducts(data)
      }
    })
  }
  useEffect(()=>{
getProduct()
  },[])
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <LoginForm />;
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-col items-center justify-center w-full mt-16 font-bold">
        <h3 className="text-center w-full text-base font-semibold p-4 text-white">
          welcome{" "}
          <span className=" text-vibrant-green">{session?.user?.name}</span>
        </h3>
        <h2 className="text-2xl text-white text-center relative w-full">
          Products{" "}
          <span
            className="text-2xl rounded-lg absolute top-0 right-8 font-extrabold bg-blue-500 px-2 active:bg-blue-800"
            onClick={() => setOpenAdd(true)}
          >
            +
          </span>
        </h2>

        <AddProductForm openAdd={openAdd} setOpenAdd={setOpenAdd} />

        <ProductListing
          editable
          onEditClick={onDeleteClick}
          products={products}
        />
        <Toaster />
      </div>
    );
  }
};

export default Admin;
