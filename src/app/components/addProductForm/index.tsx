'use client'

import { toast } from "react-hot-toast";
import React, { useState, FormEvent } from 'react';

interface AddProductFormProps {
  openAdd: boolean;
  setOpenAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ openAdd, setOpenAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleProductAdd = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append('image', image);
    }
    // Create a new product object
    const newProduct = {
      name,
      description,
      image: '',
    };

    fetch('https://api.imgbb.com/1/upload?key=0e5bf6ce03a2da6af74680937a7b8683', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        newProduct.image = data.data.url;
        fetch('/api/product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            setOpenAdd(false);
            toast.success('Product Added Successfully');
            setName('');
            setImage(null);
            setDescription('');
          })
          .catch((err) => {
            toast.error('Something went wrong');
            console.log(err);
          });
      })
      .catch((error) => {
        toast.error('Something went wrong');
        console.log(error);
        // Handle the error
      });
  };

  return (
    <div
      className={ ` z-50 fixed flex flex-col items-center justify-center bg-[#00000090] transition-all duration-300 overflow-hidden ${
        openAdd ? 'w-full h-full top-0 left-0' : 'w-0 h-0 top-1/2 left-1/2'
      }`}
    >
      <span
        className="top-4 right-4 text-white font-bold absolute font-sans cursor-pointer"
        onClick={() => setOpenAdd(false)}
      >
        X
      </span>
      <form
        onSubmit={handleProductAdd}
        className="w-[95%] bg-gray-200 p-4 rounded-md"
      >
        <h2 className="text-xl text-center">Add Product</h2>
        <label className="flex flex-col">
          Name:
          <input
            type="text"
            className="px-4 py-3 rounded text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label className="flex flex-col">
          Image:
          <input
            type="file"
            className="px-4 py-3 rounded text-black"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
        </label>
        <br />
        <label className="flex flex-col">
          Description:
          <textarea
            className="px-4 py-3 rounded text-black"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <div className="flex flex-row justify-between w-full">
          <button
          type="button"
            className="text-base text-white bg-vibrant-green rounded px-4 py-3"
            onClick={() => setOpenAdd(false)}
          >
            cancel
          </button>
          <button
            className="text-base text-white bg-vibrant-green rounded px-4 py-3"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
