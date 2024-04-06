import React from "react";
import CategoryCard from "./CategoryCard";

function CategoryList({ categoriesData }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categoriesData.map((data) => (
          <CategoryCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
