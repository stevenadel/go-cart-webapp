import React, { useEffect, useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleCheckout = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/checkout/",
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error during checkout:", error);
    }
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
        <button type="submit">Checkout</button>
      </form>
    </section>
  );
};

export default Checkout;
