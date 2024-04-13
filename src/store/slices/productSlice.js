import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export const getProductsListThunk = createAsyncThunk(
  "products/getProducts",
  async ({ page, pageSize,esraa }) => {
    let path= `/products/?page=${page}&pageSize=${pageSize}`;

    if (esraa){

      path=`/search?q=${esraa}`
    }
    try {
      const res = await axiosInstance.get(
        path
    
      );
      return {
        results: res.data.results,
        nextPage: res.data.next,
        previousPage: res.data.previous,
        count: res.data.count,
      };
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    productsList: [],
    isLoading: false,
    error: "",
    currentPage: 1,
    totalPages: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsListThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductsListThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productsList = action.payload.results;
      state.currentPage = action.meta.arg.page;
      state.totalPages = Math.ceil(
        action.payload.count / action.meta.arg.pageSize
      );
    });
    builder.addCase(getProductsListThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { changeProduct } = productSlice.actions;

export default productSlice.reducer;
