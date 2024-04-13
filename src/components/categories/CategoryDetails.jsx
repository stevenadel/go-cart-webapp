import { useParams } from "react-router-dom";
import { getProductsByCategoryThunk } from "../../store/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductsList from "../products/ProductsList";

function CategoryDetails() {
  const { categoryId, isLoading, error } = useParams();
  const dispatch = useDispatch();
  const CategoryProducts = useSelector((state) => state.category.products);

  useEffect(() => {
    dispatch(getProductsByCategoryThunk(categoryId));
  }, [dispatch, categoryId]);

  return (
    <div>
      <ProductsList
        Products={CategoryProducts}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default CategoryDetails;
