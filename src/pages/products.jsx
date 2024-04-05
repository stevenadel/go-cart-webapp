import React from "react";
import ProductCard from "../components/products/ProductCard";
import Heading from "../components/reusables/Heading";

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
    title: "Printed",
    price: "220",
    aosDelay: "0",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/260x180/?shoes",
    title: "Shoes",
    price: "520",
    aosDelay: "0",
  },
  {
    id: 6,
    img: "https://source.unsplash.com/260x180/?laptop",
    title: "Laptop",
    price: "1500",
    aosDelay: "0",
  },
  {
    id: 7,
    img: "https://source.unsplash.com/260x180/?camera",
    title: "Camera",
    price: "800",
    aosDelay: "0",
  },
  {
    id: 8,
    img: "https://source.unsplash.com/260x180/?phone",
    title: "Phone",
    price: "1000",
    aosDelay: "0",
  },
  {
    id: 9,
    img: "https://source.unsplash.com/260x180/?bag",
    title: "Bag",
    price: "250",
    aosDelay: "0",
  },
  {
    id: 10,
    img: "https://source.unsplash.com/260x180/?guitar",
    title: "Guitar",
    price: "600",
    aosDelay: "0",
  },
  {
    id: 11,
    img: "https://source.unsplash.com/260x180/?headset",
    title: "Headset",
    price: "180",
    aosDelay: "0",
  },
  {
    id: 12,
    img: "https://source.unsplash.com/260x180/?jacket",
    title: "Jacket",
    price: "350",
    aosDelay: "0",
  },
  {
    id: 13,
    img: "https://source.unsplash.com/260x180/?wallet",
    title: "Wallet",
    price: "80",
    aosDelay: "0",
  },
  {
    id: 14,
    img: "https://source.unsplash.com/260x180/?perfume",
    title: "Perfume",
    price: "200",
    aosDelay: "0",
  },
  {
    id: 15,
    img: "https://source.unsplash.com/260x180/?chair",
    title: "Chair",
    price: "300",
    aosDelay: "0",
  },
  {
    id: 16,
    img: "https://source.unsplash.com/260x180/?table",
    title: "Table",
    price: "400",
    aosDelay: "0",
  },
  {
    id: 17,
    img: "https://source.unsplash.com/260x180/?lamp",
    title: "Lamp",
    price: "150",
    aosDelay: "0",
  },
  {
    id: 18,
    img: "https://source.unsplash.com/260x180/?flower",
    title: "Flower",
    price: "50",
    aosDelay: "0",
  },
  {
    id: 19,
    img: "https://source.unsplash.com/260x180/?book",
    title: "Book",
    price: "30",
    aosDelay: "0",
  },
  {
    id: 20,
    img: "https://source.unsplash.com/260x180/?pen",
    title: "Pen",
    price: "5",
    aosDelay: "0",
  },
];

function Products() {
  return (
    <>
      <Heading title="Our Products" subtitle={""} />
      <div>
        <ProductCard data={ProductsData} />
      </div>
    </>
  );
}

export default Products;
