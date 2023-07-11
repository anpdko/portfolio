import React from 'react'
import s from './About.module.scss'
import { useTranslation } from 'react-i18next';
import { useGsapFrom } from '../../hooks/useGsap'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';



const About = () => {
   const { t } = useTranslation();
   const { directionScroll } = useSelector((state: RootState) => state.gsap)

   const refAbout = useGsapFrom({
      opacity: 0, y: 150 * directionScroll
   })

   return (
      <div ref={refAbout}>
         <div className={s.about}>
            <h4 className='blue'>{t("ABOUT ME")}</h4>
            <h3>{t("I love my job⚡")}</h3>
            <p className='gray'>{t("I am 23 years old. I have over 5 years of experience in programming, and for the last 2 years, I have specialized in creating functional web applications using React. Currently, I am involved in mentoring and I enjoy it a lot.")}</p>
            <p className='gray'>{t("I am seeking an opportunity to join a professional and friendly team. I am willing to work hard towards becoming a Team Lead.")}</p>
         </div>
      </div>
   );
};
export default About