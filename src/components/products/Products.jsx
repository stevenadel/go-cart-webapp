import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { getProductsListThunk } from "../../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function Products() {
  const dispatch = useDispatch();
  const { productsList, isLoading, error } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(getProductsListThunk());
  }, [dispatch]);

  if (isLoading) {
    return <p> loading</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!productsList || productsList.length === 0) {
    console.log(productsList);
    return <p>No products found</p>;
  }

  return (
    <div>
      <ProductCard data={productsList} />
    </div>
  );
}

export default Products;
