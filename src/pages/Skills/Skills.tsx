import React, { useEffect, useState } from 'react'
import s from './Skills.module.scss'
import { listData, filterData } from './data';
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Skills = () => {
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
      <div className={s.skills}>
         <h4 className="blue">{t("SKILLS")}</h4>

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
      </div>
   )
};
export default Skills