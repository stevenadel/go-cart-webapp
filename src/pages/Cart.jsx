import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../store/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { cartList, isLoading, error, sessionId } = useSelector(
    (state) => state.cart
  );

  // Dispatch getCartThunk action when the component mounts
  useEffect(() => {
    dispatch(getCartThunk(sessionId)); // Pass session ID to getCartThunk
  }, [dispatch, sessionId]);

  // Render loading state if isLoading is true
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render cart items if cartList is not empty
  if (cartList) {
    console.log(cartList);
    // Render your cart items here
  }

  return <div>No items in the cart</div>; // Render this if cartList is empty
}

export default Cart;
