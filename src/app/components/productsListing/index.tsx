import React from "react";
import Product from "../product";

interface ProductProps {
  onEditClick?: (product:
     {
      id: number;
      name: string;
      description: string;
      image: string;
    }) => void;
  editable?: boolean;
  products?: {
    id: number;
    name: string;
    description: string;
    image: string;
  }[]|null;
  
}
const ProductListing: React.FC<ProductProps> = ({
  editable,
  onEditClick,
  products,
}) => {
  console.log(products)
  return (
    <div className="w-full">
      {products?products.map((product, productIndex) => (
        <Product
          key={product.id}
          product={product}
          index={productIndex}
          editable={editable}
          onEditClick={onEditClick}
        />
      )):<>No products Available</>}
    </div>
  );
};

export default ProductListing;
