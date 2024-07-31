import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/users/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "",
    }),
    getUserById: builder.query({
      query: (id) => {
        console.log(id);
        return `${id}`;
      },
    }),
    addUser: builder.mutation({
      query: (firstName, lastName) => ({
        url: "",
        method: "POST",
        body: { firstName, lastName, id: Date.now() },
      }),
    }),
  }),
});

export const { useAddUserMutation, useGetUserByIdQuery, useGetUsersQuery } =
  usersApi;
