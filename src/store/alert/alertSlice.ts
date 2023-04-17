import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAlert { 
   messageAlert: string;
   showAlert: boolean
}

const initialState: IAlert = { 
   messageAlert: '',
   showAlert: false
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
   setAlert: (state, action: PayloadAction<string>) => {
      state.messageAlert = action.payload;
      state.showAlert = true;
   },
   closeAlert: (state) => {
      state.messageAlert = ''
      state.showAlert = false;
   }
  },
});


export const { setAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
