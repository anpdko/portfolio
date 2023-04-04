import React from 'react'
import s from './CardPortfolio.module.scss'
import site1Img from '../../assets/images/site1.png'

const CardPortfolio = () => {

   return (
      <div className={s.card_portfolio}>
         <div className={s.contant}>
            <h4>COINDOM</h4>
            <p className='gray'>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
            <div className={s.technologies}>
               <p>React</p>
               <p>SCSS</p>
               <p>Express</p>
               <p>Mongoose</p>
            </div>
            <div className={s.links}>
               <a href="https://www.google.com.ua" target="_blank" rel="noreferrer">
                  <span>CodeLive</span>
                  <i className="bi bi-github"></i>
               </a>
               <a href="https://www.google.com.ua" target="_blank" rel="noreferrer">
                  <span>Demo</span>
                  {iconLink}
               </a>
            </div>
         </div>
         <div className={s.box_img_site}>
            <img className={s.img_site} src={site1Img} alt="site1" />
         </div>
      </div>
   );
};
export default CardPortfolio


const iconLink = (
   <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={s.icon_link} fillRule="evenodd" d="M15.153 0.651164C14.1212 1.16678 14.126 2.59672 15.1613 3.15009C15.3653 3.25919 15.3759 3.25963 18.0502 3.2734L20.7344 3.28722L14.8899 9.1338C8.45911 15.5669 8.83203 15.1574 8.83203 15.7862C8.83203 16.5648 9.43516 17.168 10.2138 17.168C10.8426 17.168 10.4331 17.5409 16.8662 11.1101L22.7128 5.26564L22.7266 7.9498C22.7404 10.6241 22.7408 10.6346 22.8499 10.8387C23.4033 11.874 24.8332 11.8788 25.3488 10.847L25.4997 10.5451V6.09298C25.4997 1.01754 25.5262 1.35065 25.0878 0.912245C24.6493 0.473838 24.9825 0.500307 19.907 0.500307H15.4549L15.153 0.651164ZM3.79179 3.35623C2.45489 3.65042 1.29184 4.62925 0.791952 5.88094C0.477297 6.66872 0.491069 6.25068 0.506453 14.5653L0.520469 22.1105L0.633037 22.4749C0.882056 23.2812 1.39191 24.0528 2.01844 24.5717C2.36825 24.8614 3.14896 25.2611 3.62086 25.3921C3.92067 25.4754 4.36465 25.4803 11.6057 25.4803H19.273L19.6604 25.3681C21.0206 24.9742 22.0583 23.9818 22.5304 22.6233L22.6916 22.1594L22.7062 18.8629C22.7167 16.5085 22.705 15.5092 22.6653 15.3662C22.5763 15.0455 22.2894 14.7096 21.961 14.5417C21.7168 14.4169 21.62 14.3949 21.3275 14.3983C21.1284 14.4006 20.906 14.4352 20.8021 14.48C20.542 14.5923 20.1777 14.9454 20.059 15.2001C19.9594 15.4142 19.9561 15.5013 19.9323 18.5699L19.9079 21.7198L19.7564 21.9884C19.673 22.1362 19.5123 22.3283 19.3991 22.4153C18.9762 22.7406 19.4316 22.7236 11.502 22.7094L4.32206 22.6966L4.03461 22.5496C3.85631 22.4583 3.68655 22.3231 3.58761 22.1933C3.26099 21.7652 3.27901 22.2202 3.27901 14.3943C3.27901 6.57339 3.26138 7.02117 3.58551 6.59981C3.67209 6.48724 3.86383 6.32696 4.01156 6.2436L4.28016 6.09211L7.43012 6.06769C10.4987 6.0439 10.5858 6.04063 10.7999 5.94096C11.0546 5.82233 11.4077 5.45796 11.52 5.19791C11.5648 5.09398 11.5994 4.87158 11.6017 4.67247C11.6051 4.38004 11.5831 4.2832 11.4583 4.03901C11.2948 3.71928 10.9652 3.43202 10.6552 3.33918C10.373 3.2546 4.18371 3.26998 3.79179 3.35623Z" fill="black" />
   </svg>
)