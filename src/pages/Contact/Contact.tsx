import React from 'react'
import s from './Contact.module.scss'
import { useTranslation } from 'react-i18next';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Textarea from '../../components/UI/Textarea/Textarea';
import {useGsapFrom} from '../../hooks/useGsap'
import {useSelector} from 'react-redux'
import { RootState } from '../../store/store';


const Contact = () => {
   const { t } = useTranslation();
   const {directionScroll} = useSelector((state:RootState) => state.gsap)
   const placeholderEmail = t("Your email address...")
   const placeholderLetter = t("Write to me...")
   
   const refContact = useGsapFrom({
      opacity: 0, y: 150 * directionScroll
   })

   return (
      <div className={s.contact} ref={refContact}>
         <h4 className='blue'>{t("CONTACT")}</h4>
         <h3>{t("Don't be shy! Hit me up!👇")}</h3>
         <Input className={s.email} placeholder={placeholderEmail}>
            <i className="bi bi-envelope-at-fill"></i>
         </Input>
         <Textarea className={s.letter} placeholder={placeholderLetter}/>
         <Button>{t("Send letter")}</Button>
      </div>
   );
};
export default Contact