import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    const response = await axios.get(`${baseURL}/wishlist`, config);
    console.log(response.data);
    return response.data;
  }
);

export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (productid) => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    console.log(productid);
    await axios.post(
      `${baseURL}/wishlist`,
      {
        product_id: productid,
      },
      config
    );
  }
);

export const removeFromWishlist = createAsyncThunk(
  "wishlist/removeFromWishlist",
  async (productId) => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const product_id = Number(productId);
      await axios.delete(`${baseURL}/wishlist`, {
        ...config,
        data: { product_id },
      });
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      throw error;
    }
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
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeFromWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
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
