import React from "react";
import Button from "../reusables/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center mt-10 px-8 ">
        {/* card section */}
        {data.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-delay={item.aosDelay}
            className="group relative" // Add relative positioning to the container
            key={item.id}
          >
            {/* Favorite icon */}
            <div className="absolute top-0 right-1 m-2">
              <FontAwesomeIcon icon={faHeart} style={{ color: "white" }} />
            </div>

            <div>
              <img
                src={'http://127.0.0.1:8000/'+data.image}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{item.title}</h2>
              <h2 className="font-bold">${item.price}</h2>
            </div>
          </div>
        ))}
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
