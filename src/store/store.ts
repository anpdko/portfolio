import {configureStore, combineReducers} from '@reduxjs/toolkit'
import themeSlice from './theme/themeSlice'
import gsapSlice from './gsap/gsapSlice';
import burgerSlice from './burger/burgerSlice';
import alertSlice from './alert/alertSlice';

export default configureStore({
   reducer: {
      theme: themeSlice,
      gsap: gsapSlice,
      burger: burgerSlice,
      alert: alertSlice
   },
})


const rootReducer = combineReducers({
   theme: themeSlice,
   gsap: gsapSlice,
   burger: burgerSlice,
   alert: alertSlice
 });
 
 export type RootState = ReturnType<typeof rootReducer>;