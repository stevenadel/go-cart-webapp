import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import {
  setQuery,

} from "../../store/slices/SearchSlice";

const SearchProduct = () => {
  const query = useSelector((state) => state.Search.query);
  const dispatch = useDispatch();

  return (
    <div className="relative group">
      <div className="flex items-center gap-1">
        <input
          type="text"
          value={query}
          placeholder="Search"
          className="search-bar w-full"
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
        <Link to={"/products"}>
          <IoMdSearch
            className="text-xl text-gray-600 group-hover:text-secondary dark:text-gray-400 duration-200"
          />
        </Link>
      </div>

    </div>
  );
};

export default SearchProduct;
