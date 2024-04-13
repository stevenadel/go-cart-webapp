import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import productDetailsReducer from "./slices/productDetailsSlice";
import wishlistReducer from "./slices/wishlistSlice";
import categoryReducer from "./slices/categorySlice";
import orderReducer from "./slices/OrderSlice";
import searchReducer from "./slices/SearchSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    productDetails: productDetailsReducer,
    wishlist: wishlistReducer,
    category: categoryReducer,
    cart: cartReducer,
    order: orderReducer,
    Search: searchReducer,
  },
});
