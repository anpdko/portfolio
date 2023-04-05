import React from 'react'
import s from './Portfolio.module.scss'
import { useTranslation } from 'react-i18next';
import CardPortfolio from '../../components/CardPortfolio/CardPortfolio';
import {useGsapFrom} from '../../hooks/useGsap'
import {useSelector} from 'react-redux'
import { RootState } from '../../store/store';


const Portfolio = () => {
   const { t } = useTranslation();
   const {directionScroll} = useSelector((state:RootState) => state.gsap)
   
   const refPortfolio = useGsapFrom({
      opacity: 0, y: 150 * directionScroll, duration: 1
   })

   return (
      <div className={s.portfolio} ref={refPortfolio}>
         <h4 className='blue'>{t("PORTFOLIO")}</h4>
         <h3>{t("Each project is a unique piece of development🧩")}</h3>
         <div className={s.cards}>
            <CardPortfolio/>
            <CardPortfolio/>
            <CardPortfolio/>
            <CardPortfolio/>
         </div>
      </div>
   );
};
export default Portfolio