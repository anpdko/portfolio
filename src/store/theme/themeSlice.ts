import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const getTheme = (): 'light' | 'dark' => {
   const theme = `${window?.localStorage?.getItem('theme')}`
   if (['light', 'dark'].includes(theme)) return theme as 'light' | 'dark';

   const userMedia = window.matchMedia('(prefers-color-scheme: light)')
   if (userMedia.matches) return 'light'

   return 'dark'
}

export interface ITheme { 
   theme: 'light' | 'dark' 
}

const initialState: ITheme = { 
   theme: getTheme() 
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
