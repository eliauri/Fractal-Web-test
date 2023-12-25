import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState, IData } from '../src/types/types';

const initialSteps = [
  { id: 0, title: '1', isDone: false },
  { id: 1, title: '2', isDone: false },
  { id: 2, title: '3', isDone: false },
];

const initialData = {
  phone: '',
  email: '',
  nickname: '',
  name: '',
  sername: '',
  advantages: [' '],
  checkbox: [],
  radio: '',
  about: '',
};

const initialState: FormState = {
  activeStep: 0,
  steps: initialSteps,
  data: initialData,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    stepIncrease(state) {
      state.steps[state.activeStep].isDone = true;
      if (state.activeStep < state.steps.length - 1) state.activeStep++;
    },
    stepDecrease(state) {
      if (state.activeStep > 0) state.activeStep--;
    },
    addData(state, action: PayloadAction<IData>) {
      state.data = action.payload;
    },
    clearData(state) {
      state.data = initialData;
      state.steps = initialSteps;
      state.activeStep = 0;
    },
  },
});

export const { stepIncrease, stepDecrease, addData, clearData } =
  formSlice.actions;
export default formSlice.reducer;
