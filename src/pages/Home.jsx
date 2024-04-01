import CategoryList from "../components/categories/CategoryList";
import Footer from "../components/Footer";
import Heading from "../components/reusables/Heading";
import Products from "../components/products/Products";

function Home() {
  return (
    <div>
      <div id="productsSection">
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        <Products />
      </div>
      <div id="categorySection">
        <CategoryList />
      </div>
      <div id="footerSection">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
