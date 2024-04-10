import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsThunk } from "../store/slices/productDetailsSlice";
import Button from "../components/reusables/Button";
import LoadingSpinner from "../components/reusables/LoadingSpinner";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, error } = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(getProductDetailsThunk(productId));
  }, [dispatch, productId]);

  if (!product) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4 flex justify-center items-center">
            <div className="max-w-lg">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={"https://i.pinimg.com/564x/f8/0d/22/f80d22e1a337e1e7cd745c12a2b3426b.jpg"}
                  alt={product.name}
                />
              </div>

            </div>
          </div>
          <div className="md:flex-1 px-4 py-28">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.name}
            </h2>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {product.description}
              </p>
            </div>
            <div className="flex mb-4 py-9">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  ${product.price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability In Stock:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {product.stock}

                </span>
              </div>
              
            </div>
            <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <Button
                    text="Add to Wishlist"
                    bgColor="bg-primary"
                    textColor="text-white"
                  />
                </div>
                <div className="w-1/2 px-2">
                  <Button
                    text="Add to Cart"
                    bgColor="bg-primary"
                    textColor="text-white"
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
