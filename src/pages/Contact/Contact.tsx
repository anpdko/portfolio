import React, { useState } from 'react'
import s from './Contact.module.scss'
import { useTranslation } from 'react-i18next';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Textarea from '../../components/UI/Textarea/Textarea';
import { useGsapFrom } from '../../hooks/useGsap'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';
import emailjs from 'emailjs-com';


const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID || '';
const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID || '';
const YOUR_USER_ID = process.env.REACT_APP_YOUR_USER_ID || '';


const SentMessage = () => {
   const { t } = useTranslation();
   const [youEmail, setYouEmail] = useState('')
   const [message, setMessage] = useState('')

   const placeholderEmail = t("Your email address...")
   const placeholderLetter = t("Write to me...")

   function sendEmail() {
      console.log(youEmail, message)

      const templateParams = {
         to_name: 'Andrii',
         from_email: youEmail,
         message_html: message,
      };

      emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_USER_ID)
         .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
         }, (error) => {
            console.log('FAILED...', error);
         });
   }

   return (
      <React.Fragment>
         <Input 
            className={s.email} 
            placeholder={placeholderEmail}
            value={youEmail}
            onChange={(e)=>setYouEmail(e.target.value)}
         >
            <i className="bi bi-envelope-at-fill"></i>
         </Input>
         <Textarea 
            className={s.letter} 
            placeholder={placeholderLetter}
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
         />
         <Button onClick={sendEmail}>{t("Send letter")}</Button>
      </React.Fragment>
   )
}

const Contact = () => {
   const { t } = useTranslation();
   const { directionScroll } = useSelector((state: RootState) => state.gsap)

   const refContact = useGsapFrom({
      opacity: 0, y: 150 * directionScroll
   })

   return (
      <div className={s.contact} ref={refContact}>
         <h4 className='blue'>{t("CONTACT")}</h4>
         <h3>{t("Don't be shy! Hit me up!👇")}</h3>
         <SentMessage/>
      </div>
   );
};
export default Contact