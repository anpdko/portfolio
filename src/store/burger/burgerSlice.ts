import { createSlice } from '@reduxjs/toolkit'



export interface IGsap { 
   toggler: 'open' | 'close'
}

const initialState: IGsap = { 
   toggler: 'close'
}

export const burgerSlice = createSlice({
  name: 'gsap',
  initialState,
  reducers: {
    setToggler: (state) => {
      state.toggler = state.toggler === 'open'?'close':'open';
    },
    setTogglerOpen: (state) => {
      state.toggler = 'open';
    },
    setTogglerClose: (state) => {
      state.toggler = 'close';
    },
  },
});

export const { setToggler, setTogglerOpen, setTogglerClose } = burgerSlice.actions;

export default burgerSlice.reducer;