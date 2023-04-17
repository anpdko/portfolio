import React from 'react'
import s from './MyCard.module.scss'
import { useTranslation } from 'react-i18next';
import fotoImg from '../../assets/images/foto.png'
import mailImg from '../../assets/images/icons/mail.png'
import gitImg from '../../assets/images/icons/git.png'
import telegramImg from '../../assets/images/icons/telegram.png'
import linkedinImg from '../../assets/images/icons/linkedin.png'
import { useGsapFrom } from '../../hooks/useGsap'


const MyCard = () => {
   const { t } = useTranslation();
   const cardRef = useGsapFrom({ opacity: 0, x: -100 });

   const handleCopyClick = async (text: string) => {
      if (text.length && navigator.clipboard) {
         await navigator.clipboard.writeText(text)
         alert('Copy email to clipboard')
      }
   }

   return (
      <div className={s.my_card} ref={cardRef}>
         <img className={s.avatar} src={fotoImg} alt="avatar" />
         <h2>{t("Andrii Priadko")}</h2>
         <ul className={s.list_info}>
            <li>
               <i className={`bi bi-geo-alt-fill ${s.bi_geo}`}></i>
               <p className='gray'>
                  <span>{t("Ukraine. Kyiv")}</span><br/>
                  <span>{t("Ready to relocate")}</span>
               </p>
            </li>
            <li>
               <i className={`bi bi-telephone-fill ${s.bi_telephone}`} ></i>
               <p className='gray'>+380961675759</p>
            </li>
         </ul>
         <ul className={s.list_social}>
            <li>
               <a href='https://t.me/anpdko' target="_blank" rel="noreferrer">
                  <div className={`${s.icon} ${s.telegram}`}><img src={telegramImg} alt="T" /></div>
               </a>
            </li>
            <li>
               <a href='https://github.com/anpdko' target="_blank" rel="noreferrer">
                  <div className={`${s.icon} ${s.git}`}><img src={gitImg} alt="G" /></div>
               </a>
            </li>
            <li>
               <div onClick={() => handleCopyClick('anpdko@gmail.com')}>
                  <div className={`${s.icon} ${s.mail}`}><img src={mailImg} alt="M" /></div>
               </div>
            </li>
            <li>
               <a href='https://www.linkedin.com/in/andrii-pryadko-a897211b2' target="_blank" rel="noreferrer">
                  <div className={`${s.icon} ${s.linkedin}`}><img src={linkedinImg} alt="L" /></div>
               </a>
            </li>
         </ul>
      </div>
   );
};
export default MyCard