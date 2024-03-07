import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initStateProps {
  currentStep: number;
}

const initialState: initStateProps = {
  currentStep: 1,
};

export const stepSlice = createSlice({
  name: "stepSlice",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    resetStep(state) {
      state.currentStep = 1;
    },
  },
});

export const { setCurrentStep, resetStep } = stepSlice.actions;

export default stepSlice.reducer;
