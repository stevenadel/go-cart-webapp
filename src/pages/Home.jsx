import CategoryList from "../components/categories/CategoryList";
import Footer from "../components/Footer";
import Heading from "../components/reusables/Heading";
import ProductsList from "../components/products/ProductsList";
import Services from "../components/services";
import { Link } from "react-router-dom";

const popularCategories = [
  {
    id: 1,
    title: "Electronics",
    image: "https://source.unsplash.com/260x180/?electronics",
  },
  {
    id: 2,
    title: "Clothing",
    image: "https://source.unsplash.com/260x180/?clothing",
  },
  {
    id: 3,
    title: "Home & Kitchen",
    image: "https://source.unsplash.com/260x180/?home",
  },
  {
    id: 4,
    title: "Books",
    image: "https://source.unsplash.com/260x180/?books",
  },
];

const PopularProducts = [
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
];

function Home() {
  return (
    <div>
      <div id="productsSection">
        <Link to="/products" className="text-primary font-semibold text-lg">
          <Heading title="Popular Products" subtitle={"Explore Our Products"} />
        </Link>
        <ProductsList Products={PopularProducts} />
      </div>

      <Services />

      <div id="categorySection">
        <Link to="/categories" className="text-primary font-semibold text-lg">
          <Heading title="Categories" subtitle={"Explore Our Categories"} />
        </Link>
        <CategoryList categoriesData={popularCategories} />
      </div>

      <div id="footerSection">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
