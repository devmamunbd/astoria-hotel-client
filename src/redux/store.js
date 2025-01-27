import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./features/blogs/blogsApi";


export const store = configureStore({
    reducer: {
        [blogApi.reducerPath] : blogApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(blogApi.middleware)
    }
})
