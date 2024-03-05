import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer } from "redux/types";

interface initStateProps {
  answers: Answer[];
}

const initialState: initStateProps = {
  answers: [],
};

export const answerSlice = createSlice({
  name: "answerSlice",
  initialState,
  reducers: {},
});

export const {} = answerSlice.actions;

export default answerSlice.reducer;
