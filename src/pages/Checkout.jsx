import React, { useEffect, useState } from "react";
import { axiosInstance } from "../axios";
import Swal from "sweetalert2";

const Checkout = ({ dispatch, cartId }) => {
  const [token, setToken] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleCheckout = async (event) => {
    event.preventDefault();

    try {
      if (!cartId) {
        throw new Error("Cart ID is required");
      }

      const response = await axiosInstance.post(
        "/checkout/",
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
        Swal.fire("Success!", "Cash payment successful!", "success").then(
          () => {
            window.location.href = "/";
          }
        );
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
      <form onSubmit={handleCheckout}>
        <label>
          Payment Method:
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-primary text-white w-full mt-2 py-2 rounded-md shadow-md hover:bg-primary-dark transition duration-300"
        >
          Checkout
        </button>
      </form>
    </section>
  );
};

export default Checkout;
