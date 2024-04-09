import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdSearch } from 'react-icons/io';
import { setQuery, setSearchResults, setError,setHasSearched } from '../../store/slices/SearchSlice';
import { axiosInstance } from '../../axios';
import LoadingSpinner from '../reusables/LoadingSpinner';

const SearchProduct = () => {
  const [isSearching, setIsSearching] = useState(false);
  const query = useSelector((state) => state.Search.query);
  const searchResults = useSelector((state) => state.Search.searchResults);
  const hasSearched = useSelector((state) => state.Search.hasSearched);

  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      setIsSearching(true);
      const response = await axiosInstance.get(`/search?q=${query}`);
      dispatch(setSearchResults(response.data));
      dispatch(setError(''));
    } catch (error) {
      console.error('Error fetching search results:', error);
      dispatch(setSearchResults([]));
      dispatch(setError('An error occurred while fetching data. Please try again later.'));
    } finally {
      setIsSearching(false);
      dispatch(setHasSearched(true)); 
    }
  };

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
        <IoMdSearch
          className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 duration-200"
          onClick={handleSearch}
        />
      </div>
      {isSearching ? (
        <LoadingSpinner/>
      ) : hasSearched && searchResults.length === 0 ? (
        <p>No matching results found.</p>
      ) : searchResults.length > 0 ? (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <h3>{result.name}</h3>
                <p>{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SearchProduct;
