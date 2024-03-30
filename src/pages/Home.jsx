import CategoryList from "../components/categoryList";
import Products from "../components/products";
import Footer from "../components/footer";

function Home() {
  return (
    <div>
      <Products />
      <CategoryList />
      <Footer />
    </div>
  );
}

export default Home;
