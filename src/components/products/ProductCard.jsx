import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/slices/cartSlice";
import Button from "../reusables/Button";

import {
  addToWishlist,
  removeFromWishlist,
} from "../../store/slices/wishlistSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToCart = (productId) => {
    dispatch(addToCartThunk({ productId: productId, quantity: 1 }))
      .then((response) => {
        console.log("Add to cart successful:", response);
      })
      .catch((error) => {
        console.error("Add to cart failed:", error);
        if (error.response && error.response.status === 401) {
          console.log("Unauthorized error detected");
          setErrorMessage("Please log in to add items to your cart.");
        } else {
          console.log("Other error detected");
          setErrorMessage("An error occurred. Please try again later.");
        }
      });
  };

  const closeErrorMessage = () => {
    setErrorMessage("");
  };

  const handleAddToWishlist = async (productId) => {
    await dispatch(addToWishlist(productId));
  };

  const handleRemoveFromWishlist = async (productId) => {
    await dispatch(removeFromWishlist(productId));
  };

  const toggleFavourite = () => {
    setIsFavourite((prevState) => !prevState);
  };

  return (
    <div>
      {errorMessage && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md">
            <p className="text-red-600 font-semibold">{errorMessage}</p>
            <button
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
              onClick={closeErrorMessage}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="group relative my-5" key={item.id}>
        <div>
          <img
             src={import.meta.env.VITE_API_URL+item.image}
            alt="product"
            className="h-[180px] w-[260px] object-cover rounded-md"
          />
          <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
            <Link to={`/products/${item.id}`}>
              <Button
                text={"View details"}
                bgColor={"bg-primary"}
                textColor={"text-white"}
              />
            </Link>
          </div>
        </div>
        <div className="leading-7">
          <h2 className="font-semibold">{item.name.substring(0, 22)}..</h2>
          <h2 className="font-bold">${item.price}</h2>
        </div>
      </div>
      <div style={{ marginTop: 5, marginBottom: 20 }}>
        <Button
          text={"Add to cart"}
          bgColor={"bg-primary"}
          textColor={"text-white"}
          handler={() => handleAddToCart(item.id)}
        />
        <button
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            marginLeft: "15px",
          }}
          onClick={() => {
            toggleFavourite();
            if (isFavourite) {
              handleRemoveFromWishlist(item.id);
            } else {
              handleAddToWishlist(item.id);
            }
          }}
        >
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            style={{
              color: isFavourite ? "red" : "grey",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
