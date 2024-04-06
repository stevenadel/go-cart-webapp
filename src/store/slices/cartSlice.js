import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

// Thunk to fetch cart data
export const getCartThunk = createAsyncThunk("cart/getCart", async (_, { getState }) => {
    try {
        const { sessionId } = getState().cart; // Get session ID from Redux state
        const res = await axiosInstance.get("/cart/", {
            params: { session_id: sessionId } // Pass session ID as query parameter
        });
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

// Thunk to add an item to the cart
export const addToCartThunk = createAsyncThunk("cart/addToCart", async (productId, { getState }) => {
    try {
        const { sessionId } = getState().cart; // Get session ID from Redux state
        const res = await axiosInstance.post("/cart/", { product_id: productId, session_id: sessionId });
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        isLoading: false,
        error: "",
        sessionId: "" // Add sessionId to initialState
    },
    reducers: {
        setSessionId: (state, action) => {
            state.sessionId = action.payload;
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

export const { setSessionId } = cartSlice.actions; // Export the setSessionId action creator

export default cartSlice.reducer;
