import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  searchResults: [],
  error: '',
  hasSearched: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },setHasSearched(state, action) { 
      state.hasSearched = action.payload;
    },
  }
});

export const { setQuery, setSearchResults, setError ,setHasSearched} = searchSlice.actions;

export default searchSlice.reducer;
