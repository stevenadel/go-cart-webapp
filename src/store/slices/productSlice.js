import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export const getProductsListThunk = createAsyncThunk("products/getProducts", async () => {
    try {
        const res = await axiosInstance.get("/products/");
        return res.data.results;
    } catch (error) {
        console.log(error)
    }

});

const productSlice = createSlice({
    name: "product",
    initialState: {
        productsList: [],
        isLoading: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsListThunk.pending, (state) => {
            state.isLoading = true;

        })
        builder.addCase(getProductsListThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productsList = action.payload;
        })
        builder.addCase(getProductsListThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})



export default productSlice.reducer;
