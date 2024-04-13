import React, { useEffect, useState } from "react";
import Heading from "../components/reusables/Heading";
import ProductsList from "../components/products/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { getProductsListThunk } from "../store/slices/productSlice";

function Products() {
  const dispatch = useDispatch();
  const { productsList, isLoading, error, currentPage, totalPages } =
    useSelector((state) => state.product);

  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    dispatch(getProductsListThunk({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  const handleNextPage = () => {
    setPage(page + 1); // Increment page directly
  };

  const handlePreviousPage = () => {
    setPage(page - 1); // Decrement page directly
  };

  if (isLoading) {
    return <p> loading</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!productsList || productsList.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <>
      <Heading title="Our Products" subtitle={""} />
      <ProductsList Products={productsList} />
      <div>
        {currentPage > 1 && (
          <button onClick={handlePreviousPage}>Previous</button>
        )}
        {currentPage < totalPages && (
          <button onClick={handleNextPage}>Next</button>
        )}
      </div>
    </>
  );
}

export default Products;
