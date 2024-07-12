import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface ConnectionState {
  connectionType: string | undefined;
  isOpenModalConnect: boolean;
  drawerAccount: boolean;
}

const initialState: ConnectionState = {
  connectionType: undefined,
  isOpenModalConnect: false,
  drawerAccount: false,
};

export const ConnectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setConnectionType: (
      state,
      actions: PayloadAction<{ type: string | undefined }>,
    ) => {
      state.connectionType = actions.payload.type;
    },
    setIsOpenModalConnect: (
      state,
      actions: PayloadAction<{ isOpen: boolean }>,
    ) => {
      state.isOpenModalConnect = actions.payload.isOpen;
    },
    setDrawerAccount: (state, actions: PayloadAction<{ isOpen: boolean }>) => {
      state.drawerAccount = actions.payload.isOpen;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.connection,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setConnectionType, setIsOpenModalConnect, setDrawerAccount } =
  ConnectionSlice.actions;

export default ConnectionSlice.reducer;
