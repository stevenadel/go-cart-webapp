import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export const getCartThunk = createAsyncThunk("cart/getCart", async () => {
  try {
    const res = await axiosInstance.get("/cart/");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const addToCartThunk = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity }, { getState, rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };
      const data = {
        product_id: productId,
        quantity: quantity,
      };
      const res = await axiosInstance.post("/cart/", data, config);
      return res.data;
    } catch (error) {
      if (error.response.status === 401) {
        console.log("Unauthorized access error:", error.response.statusText);
        return rejectWithValue("Unauthorized access");
      }
      console.log("Other error occurred:", error);
      throw error;
    }
  }
);

export const deleteCartItemThunk = createAsyncThunk(
  "cart/deleteCartItem",
  async (itemId, { getState }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
        data: { item_id: itemId },
      };
      await axiosInstance.delete(`/cart/`, config);
      return itemId;
    } catch (error) {
      console.log("Delete item error:", error);
      throw error;
    }
  }
);
export const updateCartItemQuantityThunk = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async ({ itemId, quantity }, { getState }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };
      const data = {
        item_id: itemId,
        quantity: quantity,
      };
      const res = await axiosInstance.patch(`/cart/`, data, config);
      return res.data;
    } catch (error) {
      console.log("Update quantity error:", error);
      throw error;
    }
  }
);

export const createCheckoutSessionThunk = createAsyncThunk(
  "cart/createCheckoutSession",
  async ({ cartId, paymentMethod }) => {
    try {
      const response = await axiosInstance.post("/checkout/", {
        cart_id: cartId,
        payment_method: paymentMethod,
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const initialState = {
  cartList: [],
  isLoading: false,
  error: "",
  auth: {
    token: null,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.auth.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
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
      .addCase(addToCartThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartList = action.payload;
      })
      .addCase(addToCartThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setToken } = cartSlice.actions;
export default cartSlice.reducer;
