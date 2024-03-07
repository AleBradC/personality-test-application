import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer } from "types";

interface initStateProps {
  answers: Answer[];
}

const initialState: initStateProps = {
  answers: [],
};

export const answerSlice = createSlice({
  name: "answerSlice",
  initialState,
  reducers: {
    selectAnswer: (state, action: PayloadAction<Answer>) => {
      const { questionId } = action.payload;
      const existingAnswerIndex = state.answers.findIndex(
        (answer) => answer.questionId === questionId
      );

      if (existingAnswerIndex !== -1) {
        state.answers[existingAnswerIndex] = action.payload;
      } else {
        state.answers.push(action.payload);
      }
    },
  },
});

export const { selectAnswer } = answerSlice.actions;

export default answerSlice.reducer;
