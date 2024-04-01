import CategoryList from "../components/Categories/CategoryList";
import Footer from "../components/Footer";
import Heading from "../components/Reusales/Heading";
import Products from "../components/Products/Products";

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
