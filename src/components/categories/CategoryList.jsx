import React from "react";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategoryListThunk } from "../../store/slices/categorySlice";
import LoadingSpinner from "../reusables/LoadingSpinner";

function CategoryList({ Popular = false }) {
  const dispatch = useDispatch();
  const { categoryList, isLoading, error, currentPage, totalPages } =
    useSelector((state) => state.category);
  const [page, setPage] = useState(1);
  const pageSize = 10; // Adjust page size as per your requirement

  useEffect(() => {
    dispatch(getCategoryListThunk({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  const handleNextPage = () => {
    setPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setPage(currentPage - 1);
  };

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {!Popular
              ? categoryList.map((data) => (
                  <CategoryCard key={data.id} data={data} />
                ))
              : categoryList
                  .slice(0, 4)
                  .map((data) => <CategoryCard key={data.id} data={data} />)}
          </div>
          <div>
            {currentPage > 1 && (
              <button onClick={handlePreviousPage}>Previous</button>
            )}
            {currentPage < totalPages && (
              <button onClick={handleNextPage}>Next</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default CategoryList;
