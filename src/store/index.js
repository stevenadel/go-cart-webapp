import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import productDetailsReducer from "./slices/productDetailsSlice";
import wishlistReducer from "./slices/wishlistSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    productDetails: productDetailsReducer,
    wishlist: wishlistReducer,
  },
});
