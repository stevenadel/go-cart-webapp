import React from "react";
import Heading from "../components/reusables/Heading";
import ProductsList from "../components/products/ProductsList";
import { getProductsListThunk } from "../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Products() {
  const ProductDispatch = useDispatch();
  const { productsList, isLoading, error } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    ProductDispatch(getProductsListThunk());
  }, [ProductDispatch]);

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
    <>
      <Heading title="Our Products" subtitle={""} />
      <ProductsList Products={productsList} />
    </>
  );
}

export default Products;
