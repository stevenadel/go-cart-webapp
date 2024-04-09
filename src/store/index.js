import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice"
import productDetailsReducer from "./slices/productDetailsSlice";
import orderReducer from "./slices/OrderSlice";
import searchReducer from "./slices/SearchSlice";
export default configureStore({
    reducer: {
        product: productReducer,
        productDetails: productDetailsReducer,
        order: orderReducer,
        Search:searchReducer,
    },
});
