import React from 'react'
import s from './MyCard.module.scss'
import fotoImg from '../../assets/images/foto.png'
import mailImg from '../../assets/images/icons/mail.png'
import gitImg from '../../assets/images/icons/git.png'
import telegramImg from '../../assets/images/icons/telegram.png'
import linkedinImg from '../../assets/images/icons/linkedin.png'
import { useGsapFrom } from '../../hooks/useGsap'


const MyCard = () => {
   const cardRef = useGsapFrom({opacity: 0, x: -100});

   return (
      <div className={s.box_my_card}>
         <div className={s.my_card} ref={cardRef}>
            <img className={s.avatar} src={fotoImg} alt="avatar" />
            <h2>Andrii Priadko</h2>
            <ul className={s.list_info}>
               <li>
                  <i className={`bi bi-geo-alt-fill ${s.bi_geo}`}></i>
                  <p className='gray'>Ukraine. Zaporozhye. Ready to relocate</p>
               </li>
               <li>
                  <i className={`bi bi-telephone-fill ${s.bi_telephone}`} ></i>
                  <p className='gray'>+380961675759</p>
               </li>
            </ul>
            <ul className={s.list_social}>
               <li className={s.icon}>
                  <div className={s.telegram}><img src={telegramImg} alt="T" /></div>
               </li>
               <li className={s.icon}>
                  <div className={s.git}><img src={gitImg} alt="G" /></div>
               </li>
               <li className={s.icon}>
                  <div className={s.mail}><img src={mailImg} alt="M" /></div>
               </li>
               <li className={s.icon}>
                  <div className={s.linkedin}><img src={linkedinImg} alt="L" /></div>
               </li>
            </ul>
         </div>
      </div>
      
   );
};
export default MyCard