import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8000";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    const response = await axios.get(`${baseURL}/wishlist`);
    console.log(response.data);
    return response.data;
  }
);

export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (productId) => {
    const response = await axios.post(`${baseURL}/wishlist/add/`, {
      product_id: productId,
    });
    return response.data;
  }
);

export const removeFromWishlist = createAsyncThunk(
  "wishlist/removeFromWishlist",
  async (productid) => {
    const product_id = Number(productid);
    console.log(typeof product_id);
    await axios.delete(`${baseURL}/wishlist`, {
      data: { product_id },
    });
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch wishlist reducers
      .addCase(fetchWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Add to wishlist reducers
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        // Update the wishlist after adding the product (optional)
        state.list = action.payload;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Remove from wishlist reducers
      .addCase(removeFromWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        // Update the wishlist after removing the product (optional)
        state.list = action.payload;
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const wishlistActions = {
  fetchWishlist,
  addToWishlist,
  removeFromWishlist,
};

export default wishlistSlice.reducer;
