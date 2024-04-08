import React from "react";
import ProductCard from "./ProductCard";

function ProductsList({ Products }) {
  return (
    <div>
      <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center mt-10 px-8 ">
          {/* card section */}
          {Products.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
