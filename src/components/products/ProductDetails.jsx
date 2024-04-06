import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailsThunk } from '../../store/slices/productDetailsSlice';
import Button from '../reusables/Button'; 
import LoadingSpinner from '../reusables/LoadingSpinner';
const ProductDetails = () => {
  const { productId } = useParams(); 
  const dispatch = useDispatch();
  const { product, error } = useSelector(state => state.productDetails);

  useEffect(() => {
    dispatch(getProductDetailsThunk(productId)); 
  }, [dispatch, productId]);

  if(!product)
  {
    return <LoadingSpinner/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={"https://i.pinimg.com/564x/f5/e4/ad/f5e4adf845f87fe7c1f126cdd22b1d4d.jpg"} 
        alt={product.name} 
      />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {product.name}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {product.description}
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-neutral-500 dark:text-neutral-300">Price: ${product.price}</span>
          <Button text="Add to Cart" bgColor="bg-primary" textColor="text-white" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
