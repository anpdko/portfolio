import React from 'react'
import s from './About.module.scss'
import {useGsapFrom} from '../../hooks/useGsap'
import {useSelector} from 'react-redux'
import { RootState } from '../../store/store';


const About = () => {
   const {directionScroll} = useSelector((state:RootState) => state.gsap)

   const refAbout = useGsapFrom({
      opacity: 0, y: 150 * directionScroll
   })

   return (
      <div className={s.about} ref={refAbout}>
         <h4 className='blue'>ABOUT ME</h4>
         <h3>A dedicated Front-end Developer based in Ukraine 📍</h3>
         <p className='gray'>Вітаю на моєму сайті портфоліо! Я є Front-End розробником і спеціалізуюся на створенні функціональних веб-застосунків з використанням React.</p>
         <p className='gray'>Під час навчання в університеті я отримав досвід викладання веб-розробки та робототехніки, де закріпив навички: верстки, ведення проектів, дебаггінгу чужого коду, публічних виступів.</p>
         <p className='gray'>Зараз я шукаю нагоди приєднатися до професійної команди, де зможу вдосконалювати навички разом з ними. Я готовий до навчання, прагну до правильного написання коду та архітектури додатків. Сподіваюся, що мої роботи на цьому сайті вам сподобаються та покажуть мій підхід до розробки.</p>

         <h4 className="blue">SKILLS</h4>
         <p className='gray'>HTML, CSS3, SCSS, Responsive, Flex, Grid, JavaScript, ES6, React, Redux-toolkit, RestApi, Axios, React-router, Git </p>
         <h4 className="blue">EXTRA SKILLS </h4>
         <p className='gray'>Express JS, MongoDB, Firebase, Postman, Python, Framer Motion, Material-UI</p>
      </div>
   );
};
export default About