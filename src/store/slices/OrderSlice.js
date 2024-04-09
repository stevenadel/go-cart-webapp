import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from "../../axios";
export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };
      const response = await axiosInstance.get('/orders/', config);
      console.log(response.data);
      return response.data;

    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        console.error('Fetch orders rejected:', action.error);
        state.loading = false;
        state.error = action.error.message || 'Unknown error occurred';
      });
  },
});

export default orderSlice.reducer;
