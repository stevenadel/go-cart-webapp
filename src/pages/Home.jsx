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

function Home() {
  return (
    <div>
      <div id="productsSection">
        <Link to="/products" className="text-primary font-semibold text-lg">
          <Heading title="Popular Products" subtitle={"Explore Our Products"} />
        </Link>
        <ProductsList />
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
