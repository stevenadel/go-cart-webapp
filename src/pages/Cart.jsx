import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartThunk,
  deleteCartItemThunk,
  updateCartItemQuantityThunk,
} from "../store/slices/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Checkout from "./Checkout";
import LoadingSpinner from "../components/reusables/LoadingSpinner"

function Cart() {
  const dispatch = useDispatch();
  const { cartList, isLoading, error } = useSelector((state) => state.cart);
  const [subtotal, setSubtotal] = useState(0);
  const [cartId, setCartId] = useState(null);

  const handleDeleteItem = async (itemId) => {
    await dispatch(deleteCartItemThunk(itemId));
    dispatch(getCartThunk());
  };

  useEffect(() => {
    dispatch(getCartThunk());
  }, [dispatch]);

  useEffect(() => {
    let total = 0;
    cartList?.forEach((item) => {
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

  useEffect(() => {
    if (cartList?.length > 0) {
      setCartId(cartList[0].cart);
    } else {
      setCartId(null);
    }
  }, [cartList]);

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 mx-auto">
      <div className="flex flex-col items-start space-y-2">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-9 text-gray-800">
          Cart
        </h1>
        {isLoading && <LoadingSpinner/>}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && cartList?.length === 0 && (
          <p>Your cart is empty</p>
        )}
      </div>
      {!isLoading && !error && cartList && (
        <div className="mt-10 flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8">
          <div className="flex-1">
            {cartList?.map((item) => (
              <div key={item.id} className="flex items-start space-x-6">
                <img
                  className="hidden md:block w-32"
                  src={import.meta.env.VITE_API_URL + item.product.image}
                  alt={item.product.name}
                />
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800">
                    {item.product.name}
                  </p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity === 1}
                      className="px-3 py-1 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
                    >
                      -
                    </button>
                    <p className="text-lg font-semibold text-gray-800">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="px-3 py-1 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    {`$${calculateTotal(item)}`}
                  </p>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="text-gray-800 hover:text-red-600 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div className="border border-gray-200 p-4">
              <h2 className="text-lg font-semibold">Summary</h2>
              <div className="flex justify-between items-center mt-4">
                <span>Subtotal:</span>
                <span>{`$${subtotal}`}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span>Shipping:</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between items-center mt-2 border-t border-gray-200 pt-2">
                <span>Total:</span>
                <span>{`$${subtotal + 5}`}</span>{" "}
              </div>
            </div>
            <Checkout dispatch={dispatch} cartId={cartId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
