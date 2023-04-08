import React from 'react'
import s from './BurgerMenu.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import { setToggler } from '../../store/burger/burgerSlice';
import {RootState} from '../../store/store'


const BurgerMenu = () => {
   const dispatch = useDispatch()
   const {toggler} = useSelector((state:RootState) => state.burger)

   const changeToggle = () => {
      dispatch(setToggler())
   }

   return (
      <div onClick={changeToggle} 
         className={`${s.burger_menu} ${s[toggler]}`}
      >
         <span></span>
         <span></span>
         <span></span>
      </div>
   );
};
export default BurgerMenu