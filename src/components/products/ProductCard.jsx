import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "../reusables/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/slices/cartSlice";

import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../store/slices/wishlistSlice";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addToCartThunk({ productId: productId, quantity: 1 }))
      .then((response) => {
        console.log("Add to cart successful:", response);
        // Handle success, if needed
      })
      .catch((error) => {
        console.error("Add to cart failed:", error);
        // Handle error, if needed
      });
  };

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center mt-10 px-8 ">
        {data.map((product) => (
          <div
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            className="group"
            key={product.id}
          >
            <div className="relative">
              <img
                src={product.image}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  handler={() => handleAddToCart(product.id)}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{product.name}</h2>
              <h2 className="font-bold">${product.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
