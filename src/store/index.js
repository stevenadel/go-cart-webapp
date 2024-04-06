import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice"
import productDetailsReducer from "./slices/productDetailsSlice";
export default configureStore({
    reducer: {
        product: productReducer,
        productDetails: productDetailsReducer,
    },
});
