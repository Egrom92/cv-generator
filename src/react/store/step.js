import {createSlice} from "@reduxjs/toolkit";
import formInputs from "../data/formInputs";

export const STATE_NAMES = {
  FORM: 'FORM',
  PDF: 'PDF'
}

const initialState = {
  activeStepId: 1,
  activeState: STATE_NAMES.FORM,
  activeStepIdOnStart: 2,
  steps: [
    {id: 1, name: 'start'},
    {id: 2, name: 'profile'},
    {id: 3, name: 'educations'},
    {id: 4, name: 'skills'},
    {id: 5, name: 'works'}
  ],
  formInputs
};

export const stepSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    setActiveStep: (state, action) => {
      state.activeStepId = action.payload
    },
    setNextStep: (state) => {
      const currentIndex = state.steps.findIndex(step => step.id === state.activeStepId);
      if (currentIndex === -1 || currentIndex === state.steps.length - 1) return;
      state.activeStepId = state.steps[currentIndex + 1].id;
    },
    setPrevStep: (state) => {
      const currentIndex = state.steps.findIndex(step => step.id === state.activeStepId);
      if (currentIndex === -1 || currentIndex === 0) return;
      state.activeStepId = state.steps[currentIndex - 1].id;
    },
    setFormInputs: (state, action) => {
      state.formInputs = action.payload
    },
    updateWorkDate: (state, action) => {
      const { index, date, inputValue, direction } = action.payload;
      console.log(date);
      const newInputValue = [...state.formInputs[inputValue]];
      newInputValue[index][direction] = date
      state.formInputs = {
        ...state.formInputs,
        inputValue: newInputValue
      };
    },
    setActiveState: (state, action) => {
      state.activeState = STATE_NAMES[action.payload]
    },
    toggleActiveState: (state) => {
      state.activeState = state.activeState === STATE_NAMES.FORM ? STATE_NAMES.PDF : STATE_NAMES.FORM;
    }
  }
});

export const { setActiveStep, setNextStep, setPrevStep, setFormInputs, updateWorkDate, setActiveState, toggleActiveState } = stepSlice.actions;

export const selectActiveStep = state => state.step.steps.find(step => step.id === state.step.activeStepId);

export default stepSlice.reducer;