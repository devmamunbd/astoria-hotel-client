
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/v1',
        // credentials: 'include'
    }),
    endpoints: (builder) => ({
        getBlog: builder.query({
            query: ({search= '', category= '', location=''}) =>
                `/blogs?search=${search}&category=${category}&location=${location}`
        }),
        getSingleBlogById: builder.query({
            query: (id) => `/blogs/${id}`
        }),
        getRelatedBlogsById: builder.query({
            query: (id) => `/blogs/related/${id}`
        }),
    })
})


export const {useGetBlogQuery, useGetSingleBlogByIdQuery, useGetRelatedBlogsByIdQuery} = blogApi;
