import React from 'react';
import Product from '../product';
import { productsArray } from '../../lib/productsArray';

const ProductListing: React.FC = () => {
  return (
    <div className="w-full">
      {productsArray.map((product, productIndex) => (
        <Product key={product._id} product={product} index={productIndex} />
      ))}
    </div>
  );
}

export default ProductListing;
