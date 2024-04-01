import React from "react";
import Heading from "../Reusales/Heading";
import Button from "../Reusales/Button";

const CategoryCard = () => {
  return (
    <div className="py-8">
      <div className="container">
        <Heading title="Categories" subtitle={"Explore Our Categories"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b"
              alt=""
              className="w-[320px] absolute bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
