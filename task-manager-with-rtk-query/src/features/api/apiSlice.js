import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000'
    }),
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => "/projects"
        }),
        getTasks: builder.query({
            query: () => "/tasks"
        })
    })
})

export const { 
    useGetProjectsQuery,
    useGetTasksQuery
 } = apiSlice