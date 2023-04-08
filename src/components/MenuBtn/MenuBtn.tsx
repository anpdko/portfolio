import React from 'react'
import s from './MenuBtn.module.scss'
import Translation from '../Translation/Translation';
import Theme from '../Theme/Theme';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
 
const MenuBtn = () => {
   const { toggler } = useSelector((state:RootState) => state.burger)

   return (
      <div className={s.menu_btn}>
         <div className={s.menu}>
            <div className={s[toggler]}>
               <Translation/>
               <Theme/>
            </div>
         </div>
         <BurgerMenu/>
      </div>
   );
};
export default MenuBtn