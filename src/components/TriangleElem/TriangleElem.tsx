import React, { useEffect, useState } from 'react'
import s from './TriangleElem.module.scss'

const TriangleElem = () => {
   const [angle1, setAngle1] = useState(0)
   const [angle2, setAngle2] = useState(120)

   const handleScroll = (event: any) => {
      setAngle1(angle1 + event.deltaY / 40)
      setAngle2(angle2 + event.deltaY / 50)
   }

   useEffect(() => {
      window.addEventListener('wheel', handleScroll);
      return () => {
         window.removeEventListener('wheel', handleScroll)

      };
   });

   return (
      <div className={s.box}>
         <div className={s.top}>
            <svg className={s.triangle} style={{ transform: `rotate(${angle1}deg)` }} viewBox="0 0 350 333" xmlns="http://www.w3.org/2000/svg">
               <g filter="url(#filter0_d_20_5)">
                  <path d="M113.169 45.9476C121.234 24.6947 149.085 19.7838 163.933 36.9964L312.095 208.757C327.299 226.382 317.511 253.855 294.589 257.896L65.9449 298.212C43.0224 302.254 24.4288 279.786 32.6873 258.024L113.169 45.9476Z" />
               </g>
            </svg>
         </div>
         <div className={s.bottom}>
            <svg className={s.triangle} style={{ transform: `rotate(${-angle2}deg)` }} viewBox="0 0 350 333" xmlns="http://www.w3.org/2000/svg">
               <g filter="url(#filter0_d_20_5)">
                  <path d="M113.169 45.9476C121.234 24.6947 149.085 19.7838 163.933 36.9964L312.095 208.757C327.299 226.382 317.511 253.855 294.589 257.896L65.9449 298.212C43.0224 302.254 24.4288 279.786 32.6873 258.024L113.169 45.9476Z" />
               </g>
            </svg>
         </div>
      </div>
   );
};
export default TriangleElem