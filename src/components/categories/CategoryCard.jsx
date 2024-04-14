import React from "react";
import Button from "../reusables/Button";
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${import.meta.env.VITE_API_URL + data.image
      })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="py-8">
      <div className="container">
        <div
          className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end"
          style={cardStyle}
        >
          <div className="mb-4">
            <p className="text-xl font-semibold mb-[2px]">Explore</p>
            <p className="text-3xl xl:text-4xl font-bold opacity-50 mb-2 capitalize">
              {data.name}
            </p>
            <Link to={`/categories/${data.id}`}>
              <Button
                text="Browse"
                bgColor={"bg-primary"}
                textColor={"text-white"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
