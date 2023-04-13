import React from 'react'
import s from './MenuMyCard.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'


interface IMenuMyCard {
   children: any
   className?: string
}

const MenuMyCard = ({children}:IMenuMyCard) => {
   const { toggler } = useSelector((state:RootState) => state.burger)


   return (
      <div className={`${s.my_card_box} ${s[toggler]}`}>
         {children}
      </div>
   );
};
export default MenuMyCard