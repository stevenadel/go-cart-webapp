import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsThunk } from "../../store/slices/productDetailsSlice";
import Button from "../reusables/Button";
import LoadingSpinner from "../reusables/LoadingSpinner";
import { addToCartThunk } from "../../store/slices/cartSlice";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, error } = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(getProductDetailsThunk(productId));
  }, [dispatch, productId]);
  const handleAddToCart = (productId) => {
    dispatch(addToCartThunk({ productId: productId, quantity: 1 }))
      .then((response) => {
        console.log("Add to cart successful:", response);
      })
      .catch((error) => {
        console.error("Add to cart failed:", error);
        if (error.response && error.response.status === 401) {
          console.log("Unauthorized error detected");
          
        } else {
          console.log("Other error detected");
          
        }
      });
  };
  if (!product) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        
          src={'http://127.0.0.1:8000/' + product.image}
        
        alt={product.name}
      />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {product.name}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {product.description.substring(0, 100)}...
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-neutral-500 dark:text-neutral-300">
            Price: ${product.price}
          </span>
          <Button
            text="Add to Cart"
            bgColor="bg-primary"
            textColor="text-white"
            handler={() => handleAddToCart(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
