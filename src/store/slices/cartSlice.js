import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

// Thunk to fetch cart data
export const getCartThunk = createAsyncThunk(
    "cart/getCart",
    async () => {
        try {
            const res = await axiosInstance.get("/cart/");
            return res.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);

// Thunk to add an item to the cart
export const addToCartThunk = createAsyncThunk(
    "cart/addToCart",
    async ({ productId, quantity }, { getState }) => {
        try {
            const token = localStorage.getItem('token'); // Access token from cart state
            const config = {
                headers: {
                    Authorization: `Token ${token}`
                }
            };
            const data = {
                product_id: productId,
                quantity: quantity
            };
            const res = await axiosInstance.post("/cart/", data, config);
            return res.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);

const initialState = {
    cartList: [],
    isLoading: false,
    error: "",
    auth: {
        token: null, // Initialize token to null
        // Other authentication-related state variables if needed
    }
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Any additional reducers can be added here
        setToken: (state, action) => {
            state.auth.token = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch cart data reducers
            .addCase(getCartThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCartThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartList = action.payload;
            })
            .addCase(getCartThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            // Add to cart reducers
            .addCase(addToCartThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToCartThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartList = action.payload;
            })
            .addCase(addToCartThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { setToken } = cartSlice.actions; // Export action creator for setting token
export default cartSlice.reducer;
