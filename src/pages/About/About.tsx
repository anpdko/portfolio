import React, { useEffect, useState } from 'react'
import s from './About.module.scss'
import { useTranslation } from 'react-i18next';
import { useGsapFrom } from '../../hooks/useGsap'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';
import { listData, filterData } from './data';
import { motion } from 'framer-motion'


const AboutSkills = () => {
   const { t } = useTranslation();
   const [filtered, setFiltered] = useState(listData)
   const [filterId, setfilterId] = useState(0)

   useEffect(() => {
      const newArr = []
      for (let item of listData) {
         if (filterData[filterId].list.includes(item.id)) {
            newArr.unshift(item)
         }
         else {
            newArr.push(item)
         }
      }

      setFiltered(newArr)
   }, [filterId])

   return (
      <React.Fragment>
         <div className={s.filter_skills}>
            {filterData.map(item =>
               <span
                  onClick={() => setfilterId(item.id)}
                  key={item.id}
                  className={item.id === filterId ? s.active : ""}
               >
                  #{t(item.title)}
               </span>
            )}
         </div>
         <motion.div layout className={s.row_skils}>
            {filtered.map((item) =>
               <motion.span
                  className={filterData[filterId].list.includes(item.id)?s.active:''}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  layout
                  key={item.id}
               >
                  {t(item.name)}
               </motion.span>
            )}
         </motion.div>
      </React.Fragment>
   )
}



const About = () => {
   const { t } = useTranslation();
   const { directionScroll } = useSelector((state: RootState) => state.gsap)

   const refAbout = useGsapFrom({
      opacity: 0, y: 150 * directionScroll
   })

   return (
      <div className={s.about} ref={refAbout}>
         <h4 className='blue'>{t("ABOUT ME")}</h4>
         <h3>{t("I love my job⚡")}</h3>
         <p className='gray'>{t("Welcome to my portfolio website! I specialize in creating functional web applications using React.")}</p>
         <p className='gray'>{t("Currently, I am looking for an opportunity to join a professional and friendly team. I am ready to work hard towards becoming a professional and achieving my goals. I hope you enjoy my work and see my experience and skills.")}</p>
         <h4 className="blue">{t("SKILLS")}</h4>
         <AboutSkills />
      </div>
   );
};
export default About