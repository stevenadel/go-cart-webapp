import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { axiosInstance } from "../../axios";

const SearchProduct = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get(`/search?q=${query}`);
      setSearchResults(response.data);
      setError("");
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
      if (error.response && error.response.status === 404) {
        setError("No matching results found.");
      } else {
        setError(
          "An error occurred while fetching data. Please try again later."
        );
      }
    }
  };

  return (
    <div className="relative group hidden sm:block">
      <div className="relative group hidden sm:block">
        <div className="flex items-center">
          <input
            type="text"
            value={query}
            placeholder="Search"
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
          />
          <IoMdSearch
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 duration-200 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>

      {error && <div className="text-red-500">{error}</div>}
      {query && searchResults.length === 0 && !error && (
        <div className="text-gray-500">No matching results found.</div>
      )}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchProduct;
