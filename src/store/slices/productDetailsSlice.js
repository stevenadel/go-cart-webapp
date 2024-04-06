import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export const getProductDetailsThunk = createAsyncThunk(
  "productDetails/getProductDetails",
  async (productId) => {
    console.log(productId);
    const res = await axiosInstance.get(`/products/${productId}`);
    console.log(res.data);
    return res.data;
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetailsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductDetailsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProductDetailsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productDetailsSlice.reducer;
