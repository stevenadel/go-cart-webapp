import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export const getCategoryListThunk = createAsyncThunk("Category/getCategory", async ({ page, pageSize }) => {
    try {
        const res = await axiosInstance.get(`/categories/?page=${page}&pageSize=${pageSize}`);
        return {
            results: res.data.results,
            nextPage: res.data.next,
            previousPage: res.data.previous,
            count: res.data.count,
        };
    } catch (error) {
        console.log(error)
    }
});


const categorySlice = createSlice({
    name: "category",
    initialState: {
        categoryList: [],
        isLoading: false,
        error: "",
        currentPage: 1,
        totalPages: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategoryListThunk.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCategoryListThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categoryList = action.payload.results;
            state.currentPage = action.meta.arg.page;
            state.totalPages = Math.ceil(action.payload.count / action.meta.arg.pageSize);
        })
        builder.addCase(getCategoryListThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})



export default categorySlice.reducer;
