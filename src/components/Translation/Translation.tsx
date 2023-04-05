import React from 'react'
import s from './Translation.module.scss'
import useLocalStorage from '../../hooks/useLocalStorage';
import i18n from '../../translation/i18n'

const Translation = () => {
   const [language, setLanguage] = useLocalStorage('language', 'uk');

   const handleLenguageChange = () => {
      if (language === 'en') {
          i18n.changeLanguage('uk');
          setLanguage('uk');
      } else if (language === 'uk') {
          i18n.changeLanguage('en');
          setLanguage('en');
      }
  };

   return (
      <div onClick={handleLenguageChange} className={s.translation}>
            {language === 'uk' ? 'EN' : 'UK'}
      </div>
   );
};
export default Translation