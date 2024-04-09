import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import productDetailsReducer from "./slices/productDetailsSlice";
import wishlistReducer from "./slices/wishlistSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/OrderSlice";
import searchReducer from "./slices/SearchSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    productDetails: productDetailsReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    order: orderReducer,
    Search: searchReducer,
  },
});
