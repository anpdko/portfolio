import React from 'react'
import s from './MenuBtn.module.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

interface IMenuBtn {
   children: any
   className?: string
}

 
const MenuBtn = ({children}:IMenuBtn) => {
   const { toggler } = useSelector((state:RootState) => state.burger)

   return (
      <div className={s.menu_btn}>
         <div className={s.menu}>
            <div className={s[toggler]}>
               {children}
            </div>
         </div>
         <BurgerMenu/>
      </div>
   );
};
export default MenuBtn