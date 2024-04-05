import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import productDetailsReducer from "./slices/productDetailsSlice";
import wishlistReducer from "./slices/wishlistSlice";
import categoryReducer from "./slices/categorySlice";

import cartReducer from "./slices/cartSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    productDetails: productDetailsReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    category: categoryReducer
  },
});
