import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface ScrollState {
  scrollName: string | undefined;
}

const initialState: ScrollState = {
  scrollName: undefined,
};

export const ScrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollName: (state, actions: PayloadAction<{ scrollName: string }>) => {
      state.scrollName = actions.payload.scrollName;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action,
      };
    });
  },
});

// Action creators are generated for each case reducer function
export const { setScrollName } = ScrollSlice.actions;

export default ScrollSlice.reducer;
