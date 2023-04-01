import {configureStore, combineReducers} from '@reduxjs/toolkit'
import themeSlice from './theme/themeSlice'
import gsapSlice from './gsap/gsapSlice';

export default configureStore({
   reducer: {
      theme: themeSlice,
      gsap: gsapSlice
   },
})


const rootReducer = combineReducers({
   theme: themeSlice,
   gsap: gsapSlice,
 });
 
 export type RootState = ReturnType<typeof rootReducer>;