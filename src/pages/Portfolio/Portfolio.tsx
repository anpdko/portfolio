import React from 'react'
import s from './Portfolio.module.scss'
import { useTranslation } from 'react-i18next';
import CardPortfolio from '../../components/CardPortfolio/CardPortfolio';
import {useGsapFrom} from '../../hooks/useGsap'
import {useSelector} from 'react-redux'
import { RootState } from '../../store/store';
import { portfolioData } from './data';


const Portfolio = () => {
   const { t } = useTranslation();
   const {directionScroll} = useSelector((state:RootState) => state.gsap)
   
   const refPortfolio = useGsapFrom({
      opacity: 0, y: 150 * directionScroll
   })

   return (
      <div className={s.portfolio} ref={refPortfolio}>
         <h4 className='blue'>{t("PORTFOLIO")}</h4>
         <h3>{t("Each project is a unique piece of development🧩")}</h3>
         <div className={s.cards}>
            {portfolioData.map((data) =>
               <CardPortfolio key={data.id} data={data}/>
            )}

         </div>
      </div>
   );
};
export default Portfolio