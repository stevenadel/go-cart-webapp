import React from "react";
import ProductCard from "./ProductCard";

const ProductsData = [
  {
    id: 1,
    img: "https://source.unsplash.com/260x180/?headphone",
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "https://source.unsplash.com/260x180/?watch",
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "0",
  },
  {
    id: 3,
    img: "https://source.unsplash.com/260x180/?goggles",
    title: "Goggles",
    price: "320",
    aosDelay: "0",
  },
  {
    id: 4,
    img: "https://source.unsplash.com/260x180/?printed",
    title: "Printed ",
    price: "220",
    aosDelay: "0",
  },
  // {
  //   id: 5,
  //   img: "https://source.unsplash.com/260x180/?printed",
  //   title: "Printed ",
  //   price: "220",
  //   aosDelay: "0",
  // },
  // {
  //   id: 6,
  //   img: "https://source.unsplash.com/260x180/?printed",
  //   title: "Printed ",
  //   price: "220",
  //   aosDelay: "0",
  // },
];

function Products() {
  return (
    <div>
      <ProductCard data={ProductsData} />
    </div>
  );
}

export default Products;
