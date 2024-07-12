import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IConfigs } from './types';
import { CONFIG_CHAINS, DEFAULT_CHAIN } from 'src/configs/chains';

export const initialState: IConfigs = {
  language: 'uk',
  chainId: DEFAULT_CHAIN,
  chainConfigs: CONFIG_CHAINS[DEFAULT_CHAIN],
  initialledConfig: false,
};

export const ConnectionSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: {
    setConfigs: (
      state,
      action: PayloadAction<{
        chainConfigs: any;
        chainId: number;
      }>,
    ) => {
      state.chainId = action.payload.chainId;
      state.chainConfigs = action.payload.chainConfigs;
      state.initialledConfig = true;
    },
    setLanguageReduce: (
      state,
      actions: PayloadAction<{ language: IConfigs['language'] }>,
    ) => {
      state.language = actions.payload.language;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguageReduce, setConfigs } = ConnectionSlice.actions;

export default ConnectionSlice.reducer;
