import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
      providesTags: ['Todos']
    }),
    addTodo: builder.mutation({
      query: (text) => ({
        url: 'todos',
        method: 'POST',
        body: {id: Date.now(), text: text, completed: false}
      }),
      invalidatesTags: ['Todos']
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = todoApi;
