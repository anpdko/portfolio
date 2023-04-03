import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export interface IGsap { 
   directionScroll: 1 | -1
}

const initialState: IGsap = { 
   directionScroll: -1
}

export const gsapSlice = createSlice({
  name: 'gsap',
  initialState,
  reducers: {
    setDirectionScroll: (state, action: PayloadAction<1 | -1>) => {
      state.directionScroll = action.payload;
    },
  },
});

export const { setDirectionScroll } = gsapSlice.actions;

export default gsapSlice.reducer;
