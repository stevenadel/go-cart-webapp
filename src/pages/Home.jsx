import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import ProductCard from "../components/Products";

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
  {
    id: 5,
    img: "https://source.unsplash.com/260x180/?printed",
    title: "Printed ",
    price: "220",
    aosDelay: "0",
  },
  {
    id: 6,
    img: "https://source.unsplash.com/260x180/?printed",
    title: "Printed ",
    price: "220",
    aosDelay: "0",
  },
];

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
      <h1 className="text-3xl font-bold lg:text-4xl">{title}</h1>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  );
};

function Home() {
  return (
    <div>
      <div id="productsSection">
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        <ProductCard data={ProductsData} />
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
