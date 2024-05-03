import CategoryList from "../components/categories/CategoryList";
import Heading from "../components/reusables/Heading";
import ProductsList from "../components/products/ProductsList";
import Services from "../components/services";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getProductsListThunk } from "../store/slices/productSlice";

function Home() {
  const dispatch = useDispatch();
  const page = 1;
  const pageSize = 4;
  const keyword = "";
  const { productsList, isLoading, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProductsListThunk({ page, pageSize, keyword }));
  }, [dispatch]);

  return (
    <div>
      <div id="productsSection">
        <Link to="/products" className="text-primary font-semibold text-lg">
          <Heading title="Popular Products" subtitle={"Explore Our Products"} />
        </Link>
        <ProductsList
          Products={productsList.slice(0, 4)}
          isLoading={isLoading}
          error={error}
        />
      </div>

      <Services />

      <div id="categorySection">
        <Link to="/categories" className="text-primary font-semibold text-lg">
          <Heading title="Categories" subtitle={"Explore Our Categories"} />
        </Link>
        <CategoryList Popular={true} />
      </div>
    </div>
  );
}

export default Home;
