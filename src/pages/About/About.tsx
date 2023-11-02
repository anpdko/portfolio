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
            newArr.push(item)
         }
      }
      for (let item of listData) {
         if (!filterData[filterId].list.includes(item.id)) {
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
                  className={filterData[filterId].list.includes(item.id)?s.active:s.hide}
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
         <p className='gray'>{t("Hello! I have over 2 years of experience in web application development, public speaking skills, and more than 3 years of experience in teaching web and robotics. Currently, I am working with 3D graphics in the browser and managing the development of a charitable project, where I am writing the Front-end and Back-end of the website with my team. Additionally, I am dedicated to improving my English language proficiency.")}</p>
         <p className='gray'>{t("I'm actively seeking a full-time position with a company where I can enhance my skills and learn new things. I aspire to grow as a Front-end Developer and Full-stack Developer. I am dedicated to working diligently to eventually become a Team Lead in the future.")}</p>
         <h4 className="blue">{t("SKILLS")}</h4>
         <AboutSkills />
      </div>
   );
};
export default About
