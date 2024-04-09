import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "../reusables/Button";

import { useDispatch } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../store/slices/wishlistSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToWishlist = async (productId) => {
    await dispatch(addToWishlist(productId));
  };

  const handleRemoveFromWishlist = async (productId) => {
    await dispatch(removeFromWishlist(productId));
  };

  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite((prevState) => !prevState);
  };

  return (
    <div>
      <div className="group relative" key={item.id}>
        <div>
          <img
            src={item.img}
            alt=""
            className="h-[180px] w-[260px] object-cover rounded-md"
          />
          {/* hover button */}
          <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
            <Button
              text={"View details"}
              bgColor={"bg-primary"}
              textColor={"text-white"}
            />
          </div>
        </div>
        <div className="leading-7">
          <h2 className="font-semibold">{item.title}</h2>
          <h2 className="font-bold">${item.price}</h2>
        </div>
      </div>
      <div style={{ marginTop: 5, marginBottom: 20 }}>
        <button className="bg-primary text-white px-4 py-2 rounded-md">
          Add to Cart
        </button>
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
