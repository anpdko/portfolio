import React from 'react'
import s from './About.module.scss'
import { useTranslation } from 'react-i18next';
import { useGsapFrom } from '../../hooks/useGsap'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';
import {list, filter} from './data';



const About = () => {
   const { t } = useTranslation();
   const { directionScroll } = useSelector((state: RootState) => state.gsap)

   const refAbout = useGsapFrom({
      opacity: 0, y: 150 * directionScroll
   })

   return (
      <div className={s.about} ref={refAbout}>
         <h4 className='blue'>{t("ABOUT ME")}</h4>
         <h3>{t("I really enjoy what I do⚡")}</h3>
         <p className='gray'>{t("Welcome to my portfolio website! I am a Front-End developer specializing in creating functional web applications using React.")}</p>
         <p className='gray'>{t("Currently, I am looking for an opportunity to join a professional and friendly team. I am ready to work hard towards becoming a professional and achieving my goals. I hope you enjoy my work and see my experience and skills.")}</p>

         <h4 className="blue">{t("SKILLS")}</h4>
         <div className={s.filter_skills}>
            <span>#{t('all')}</span>
            {filter.map(item => 
               <span key={item.id}>#{t(item.title)}</span>
            )}
         </div>
         <div className={s.row_skils}>
            {list.map((item) => 
               <span key={item.id}>{item.name} /</span>
            )}
         </div>
      </div>
   );
};
export default About