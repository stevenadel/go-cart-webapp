import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../store/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { cartList, isLoading, error } = useSelector(
    (state) => state.cart
  );

  // Dispatch getCartThunk action when the component mounts
  useEffect(() => {
    dispatch(getCartThunk()); // Pass session ID to getCartThunk
  }, [dispatch]);

  // Render loading state if isLoading is true
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #13432</h1>
        <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        {cartList.map((item) => (
          <div key={item.id} className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:p-6 md:w-full xl:p-8 w-full">
              <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">{item.product.name}</p>
              <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img className="w-full hidden md:block" src={item.product.image} alt={item.product.name} />
                  <img className="w-full md:hidden" src={item.product.image} alt={item.product.name} />
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base dark:text-white xl:text-lg leading-6">{`$${item.product.price}`} </p>
                    <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{item.quantity}</p>
                    <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">{`$${item.total}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
