import {configureStore, combineReducers} from '@reduxjs/toolkit'
import themeSlice from './theme/themeSlice'

export default configureStore({
   reducer: {
      theme: themeSlice,
   },
})


const rootReducer = combineReducers({
   theme: themeSlice,
 });
 
 export type RootState = ReturnType<typeof rootReducer>;