import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/v1',
        // credentials: 'include'
    }),
    endpoints: (builder)=>({
        registerUser: builder.mutation({
            query: (newUser) => ({
                url: "/users/register",
                method: "POST",
                body: newUser
            })
        }),
        loginUser: builder.mutation({
            query: (credentials)=> ({
                url: "/users/login",
                method: "POST",
                body: credentials
            })
        }),
        logOutUser: builder.mutation({
            query: ()=> ({
                url: "/users/logout",
                method: "POST"
            })
        }),
        getAllUsers: builder.query({
            query: ()=> ({
                url: "/users/allUsers",
                method: "GET"
            }),
            refetchOnMount: true,
            invalidatesTags: ["User"]
        }),
        deleteUser: builder.mutation({
            query: (id)=> ({
                url: `/users/delete/${id}`,
                method: "DELETE"
            })
        }),
        updateUser: builder.mutation({
            query: ({id, role})=>({
                url: `/users/update/${id}`,
                method: "PUT",
                body: {role}
            }),
            refetchOnMount: true,
            invalidatesTags: ["User"]
        })
    })
})


export const {useRegisterUserMutation, useLoginUserMutation, useLogOutUserMutation, useGetAllUsersQuery, useDeleteUserMutation, useUpdateUserMutation} = authApi;
