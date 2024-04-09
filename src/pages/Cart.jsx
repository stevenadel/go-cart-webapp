import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk, deleteCartItemThunk, updateCartItemQuantityThunk } from "../store/slices/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const dispatch = useDispatch();
  const { cartList, isLoading, error } = useSelector(
    (state) => state.cart
  );
  const [subtotal, setSubtotal] = useState(0);
  const handleDeleteItem = async (itemId) => {
    await dispatch(deleteCartItemThunk(itemId));
    dispatch(getCartThunk());
  };

  useEffect(() => {
    dispatch(getCartThunk()); 
  }, [dispatch]);
  useEffect(() => {
    // Calculate subtotal whenever cartList changes
    let total = 0;
    cartList.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    setSubtotal(total);
  }, [cartList]);
  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateCartItemQuantityThunk({ itemId, quantity: newQuantity }));
    dispatch(getCartThunk());
  };

  const calculateTotal = (item) => {
    return item.product.price * item.quantity;
  };

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Cart</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && cartList?.length === 0 && (
          <p>Your cart is empty</p>
        )}
      </div>
      {!isLoading && !error && cartList && (
        <><div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          {cartList?.map((item) => (
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
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity === 1}
                          className="text-primary-dark rounded-md px-3 py-1 bg-primary-light hover:bg-primary transition duration-300 disabled:bg-gray-300 disabled:text-gray-500"
                        >
                          -
                        </button>
                        <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{item.quantity}</p>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="text-primary-dark rounded-md px-3 py-1 bg-brandGreen-light hover:bg-brandGreen transition duration-300"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">{`$${calculateTotal(item)}`}</p>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="text-primary-dark rounded-md px-3 py-1 bg-primary-light hover:bg-primary transition duration-300"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div><div className="w-1/3">
            <div className="border border-gray-200 p-4">
              <h2 className="text-lg font-semibold">Summary</h2>
              <div className="flex justify-between items-center mt-4">
                <span>Subtotal:</span>
                <span>{`$${subtotal}`}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span>Shipping:</span>
                <span>$5.00</span> {/* Example shipping cost */}
              </div>
              <div className="flex justify-between items-center mt-2 border-t border-gray-200 pt-2">
                <span>Total:</span>
                <span>{`$${subtotal + 5}`}</span> {/* Example total including shipping */}
              </div>
            </div>
            <button
                    className="bg-primary text-white w-full mt-2 py-2 rounded-md shadow-md hover:bg-primary-dark transition duration-300"
                  >
                    Checkout
                  </button>
          </div></>
               
        
      )}
    </div>
  );
}

export default Cart;
