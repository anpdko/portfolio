import {configureStore, combineReducers} from '@reduxjs/toolkit'
import themeSlice from './theme/themeSlice'
import gsapSlice from './gsap/gsapSlice';
import burgerSlice from './burger/burgerSlice';

export default configureStore({
   reducer: {
      theme: themeSlice,
      gsap: gsapSlice,
      burger: burgerSlice
   },
})


const rootReducer = combineReducers({
   theme: themeSlice,
   gsap: gsapSlice,
   burger: burgerSlice
 });
 
 export type RootState = ReturnType<typeof rootReducer>;