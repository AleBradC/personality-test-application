import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Answer, Question, TestResult } from "../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["Question", "Answer"],
  endpoints: (builder) => ({
    getQuestions: builder.query<Question[], void>({
      query: () => "/api/questions",
      providesTags: ["Question"],
    }),
    getAnswersResult: builder.query<TestResult, void>({
      query: () => "/api/answers/result",
      providesTags: ["Answer"],
    }),
    addAnswers: builder.mutation<void, Answer[]>({
      query: (answers) => ({
        url: "/api/answers",
        method: "POST",
        body: {
          answers: answers,
        },
      }),
      invalidatesTags: ["Answer"],
    }),
    deleteAllAnswers: builder.mutation<void, void>({
      query: () => ({
        url: "/api/answers/delete",
        method: "DELETE",
      }),
      invalidatesTags: ["Answer"],
    }),
  }),
});

export const {
  useGetQuestionsQuery,
  useGetAnswersResultQuery,
  useAddAnswersMutation,
  useDeleteAllAnswersMutation,
} = api;
