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
               <g filter="url(#filter0_i_20_5)">
                  <path d="M83.1686 19.9476C91.2339 -1.30531 119.085 -6.21624 133.933 10.9964L282.095 182.757C297.299 200.382 287.511 227.855 264.588 231.896L35.9448 272.212C13.0222 276.254 -5.57129 253.786 2.68717 232.024L83.1686 19.9476Z" />
               </g>
               <defs>
                  <filter id="filter0_i_20_5" x="0.691162" y="0.583228" width="288.717" height="272.104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                     <feFlood floodOpacity="0" result="BackgroundImageFix" />
                     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                     <feOffset />
                     <feGaussianBlur stdDeviation="4" />
                     <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                     <feBlend mode="normal" in2="shape" result="effect1_innerShadow_20_5" />
                  </filter>
               </defs>
            </svg>
         </div>
         <div className={s.bottom}>
         <svg className={s.triangle} style={{ transform: `rotate(${angle2}deg)` }} viewBox="0 0 350 333" xmlns="http://www.w3.org/2000/svg">
               <g filter="url(#filter0_i_20_5)">
                  <path d="M83.1686 19.9476C91.2339 -1.30531 119.085 -6.21624 133.933 10.9964L282.095 182.757C297.299 200.382 287.511 227.855 264.588 231.896L35.9448 272.212C13.0222 276.254 -5.57129 253.786 2.68717 232.024L83.1686 19.9476Z" />
               </g>
               <defs>
                  <filter id="filter0_i_20_5" x="0.691162" y="0.583228" width="288.717" height="272.104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                     <feFlood floodOpacity="0" result="BackgroundImageFix" />
                     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                     <feOffset />
                     <feGaussianBlur stdDeviation="4" />
                     <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                     <feBlend mode="normal" in2="shape" result="effect1_innerShadow_20_5" />
                  </filter>
               </defs>
            </svg>
         </div>
      </div>
   );
};
export default TriangleElem