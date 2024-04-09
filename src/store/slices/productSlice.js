import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export const getProductsListThunk = createAsyncThunk("products/getProducts", async () => {
    const res = await axiosInstance.get("/products");
    return res.data;
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        list: []
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsListThunk.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProductsListThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.list = action.payload.products;
        })
        builder.addCase(getProductsListThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export const { changeProduct } = productSlice.actions;

export default productSlice.reducer;
