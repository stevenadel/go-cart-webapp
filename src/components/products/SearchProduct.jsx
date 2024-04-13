import { useDispatch, useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";
import {
  setQuery,

} from "../../store/slices/SearchSlice";

import { Link } from "react-router-dom";

const SearchProduct = () => {
  const query = useSelector((state) => state.Search.query);


  const dispatch = useDispatch();


  return (
    <div className="relative group">
      <div className="flex items-center">
        <input
          type="text"
          value={query}
          placeholder="Search"
          className="search-bar"
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />

        <Link to={"/products"}>        <IoMdSearch
          className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 duration-200"
        /></Link>
        

      </div>
 
    </div>
  );
};

export default SearchProduct;
