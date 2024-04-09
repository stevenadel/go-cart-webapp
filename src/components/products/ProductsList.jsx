import React from "react";
import ProductCard from "./ProductCard";
import { getProductsListThunk } from "../../store/slices/productSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
function ProductsList({ Products }) {
  
  const dispatch = useDispatch();
  const { productsList, isLoading, error, currentPage, totalPages } = useSelector(state => state.product);
  const [page, setPage] = useState(1);
  const pageSize = 10; // Adjust page size as per your requirement

  useEffect(() => {
    dispatch(getProductsListThunk({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  const handleNextPage = () => {
    setPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setPage(currentPage - 1);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && (
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center mt-10 px-8 ">
            {/* card section */}
            {productsList.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
          <div>
            {currentPage > 1 && <button onClick={handlePreviousPage}>Previous</button>}
            {currentPage < totalPages && <button onClick={handleNextPage}>Next</button>}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
