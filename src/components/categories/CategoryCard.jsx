import React from "react";
import Button from "../reusables/Button";

const CategoryCard = ({ data }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${data.image})`,
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
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-gray-400">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                {data.title}
              </p>
              <Button
                text="Browse"
                bgColor={"bg-primary"}
                textColor={"text-white"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
