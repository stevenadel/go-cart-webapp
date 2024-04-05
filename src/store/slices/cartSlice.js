import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export const getCartThunk = createAsyncThunk("cart/getCart", async () => {
    try {
        const res = await axiosInstance.get("/cart/");
        return res.data;
    } catch (error) {
        console.log(error)
    }

});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        isLoading: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCartThunk.pending, (state) => {
            state.isLoading = true;

        })
        builder.addCase(getCartThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cartList = action.payload;
        })
        builder.addCase(getCartThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})



export default cartSlice.reducer;