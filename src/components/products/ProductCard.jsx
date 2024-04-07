import React, { useState } from "react";
import Button from "../reusables/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { getProductsListThunk } from "../../store/slices/productSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";


const ProductCard = ({ item }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite((prevState) => !prevState);
  };
  

  return (
    <div>
      <div className="group relative" key={item.id}>
        <div>
          <img
            src={'http://127.0.0.1:8000/'+item.image}
            alt=""
            className="h-[180px] w-[260px] object-cover rounded-md"
          />
          {/* hover button */}
          <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
            <Button
              text={"View details"}
              bgColor={"bg-primary"}
              textColor={"text-white"}
            />
          </div>
        </div>
        <div className="leading-7">
          <h2 className="font-semibold">{item.name}</h2>
          <h2 className="font-bold">${item.price}</h2>
        </div>
      </div>
      <div style={{ marginTop: 5, marginBottom: 20 }}>
        <button className="bg-primary text-white px-4 py-2 rounded-md">
          Add to Cart
        </button>
        <button
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            marginLeft: "15px",
          }}
          onClick={toggleFavourite}
        >
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            style={{
              color: isFavourite ? "red" : "grey",
            }}
          />
        </button>
      </div>
    </div>

    // <div className="mb-10">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center mt-10 px-8 ">
    //     {/* card section */}
    //     {data.map((data) => (
    //       <div
    //         data-aos="fade-up"
    //         data-aos-delay={data.aosDelay}
    //         className="group"
    //         key={data.id}
    //       >
    //         <div className="relative">
    //           <img
    //             src={data.img}
    //             alt=""
    //             className="h-[180px] w-[260px] object-cover rounded-md"
    //           />
    //           {/* hover button */}
    //           <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
    //             <Button
    //               text={"Add to cart"}
    //               bgColor={"bg-primary"}
    //               textColor={"text-white"}
    //             />
    //           </div>
    //         </div>
    //         <div className="leading-7">
    //           <h2 className="font-semibold">{data.title}</h2>
    //           <h2 className="font-bold">${data.price}</h2>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default ProductCard;
