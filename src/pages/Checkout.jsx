import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../axios";
import { getCartThunk } from "../store/slices/cartSlice";
import Swal from "sweetalert2";

const Checkout = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const cartList = useSelector((state) => state.cart.cartList);
  const cartId = cartList.length > 0 ? cartList[0].cart : null;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    dispatch(getCartThunk());
  }, [dispatch]);

  const handleCheckout = async (event) => {
    event.preventDefault();

    try {
      if (!cartId) {
        throw new Error("Cart ID is required");
      }

      const response = await axiosInstance.post(
        "http://localhost:8000/checkout/",
        {
          payment_method: paymentMethod,
          cart_id: cartId,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (paymentMethod === "cash") {
        Swal.fire("Success!", "Cash payment successful!", "success").then(() => {
          window.location.href = "/";
        });
      } else {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error during checkout:", error.message);
    }
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <form onSubmit={handleCheckout}>
        <label>
          Payment Method:
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
          </select>
        </label>
        <button type="submit">Checkout</button>
      </form>
    </section>
  );
};

export default Checkout;
