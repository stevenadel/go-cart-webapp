import CategoryList from "../components/categories/CategoryList";
import Heading from "../components/reusables/Heading";

const AllCategories = [
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
  {
    id: 5,
    title: "Sports & Fitness",
    image: "https://source.unsplash.com/260x180/?sports",
  },
  {
    id: 6,
    title: "Beauty & Personal Care",
    image: "https://source.unsplash.com/260x180/?beauty",
  },
  {
    id: 7,
    title: "Toys & Games",
    image: "https://source.unsplash.com/260x180/?toys",
  },
  {
    id: 8,
    title: "Automotive",
    image: "https://source.unsplash.com/260x180/?automotive",
  },
  {
    id: 9,
    title: "Health & Wellness",
    image: "https://source.unsplash.com/260x180/?health",
  },
  {
    id: 10,
    title: "Jewelry",
    image: "https://source.unsplash.com/260x180/?jewelry",
  },
  {
    id: 11,
    title: "Movies & Music",
    image: "https://source.unsplash.com/260x180/?movies",
  },
  {
    id: 12,
    title: "Pet Supplies",
    image: "https://source.unsplash.com/260x180/?pets",
  },
  {
    id: 13,
    title: "Food & Beverages",
    image: "https://source.unsplash.com/260x180/?food",
  },
  {
    id: 14,
    title: "Baby Products",
    image: "https://source.unsplash.com/260x180/?baby",
  },
  {
    id: 15,
    title: "Office Supplies",
    image: "https://source.unsplash.com/260x180/?office",
  },
];

function Categories() {
  return (
    <div>
      <Heading title="Our Categories" subtitle={""} />
      <CategoryList categoriesData={AllCategories} />
    </div>
  );
}

export default Categories;
