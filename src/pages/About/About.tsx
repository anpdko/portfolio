import React from 'react'
import s from './About.module.scss'
import { useGsapFrom } from '../../hooks/useGsap'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';


const About = () => {
   const { directionScroll } = useSelector((state: RootState) => state.gsap)

   const refAbout = useGsapFrom({
      opacity: 0, y: 150 * directionScroll
   })

   return (
      <div className={s.about} ref={refAbout}>
         <h4 className='blue'>ABOUT ME</h4>
         <h3>A dedicated Front-end Developer based in Ukraine 📍</h3>
         <p className='gray'>Вітаю на моєму сайті портфоліо! Я є Front-End розробником і спеціалізуюся на створенні функціональних веб-застосунків з використанням React.</p>
         {/* <p className='gray'>Під час навчання в університеті я отримав досвід викладання веб-розробки та робототехніки, де закріпив навички: верстки, ведення проектів, дебаггінгу чужого коду, публічних виступів.</p> */}
         <p className='gray'>Зараз я шукаю нагоди приєднатися до професійної команди, де зможу вдосконалювати навички разом з ними. Я готовий до навчання, прагну до правильного написання коду та архітектури додатків. Сподіваюся, що мої роботи на цьому сайті вам сподобаються та покажуть мій підхід до розробки.</p>

         <div className={s.row_skils}>
            <div>
               <h4 className="blue">SKILLS</h4>
               <ul>
                  <li>HTML, CSS, SCSS</li>
                  <li>Responsive, Flex, Grid</li>
                  <li>JavaScript, TypeScript, ES6</li>
                  <li>React, Redux-toolkit, RestApi</li>
                  <li>Framer Motion, Gsap</li>
                  <li>Communicative, Team-oriented</li>
                  <li>Git, Jira</li>
               </ul>
            </div>
            <div>
               <h4 className="blue">EXTRA SKILLS</h4>
               <ul>
                  <li>Express.js, Postman</li>
                  <li>MongoDB, Firebase</li>
                  <li>Mentoring, Public speaking</li>
                  <li>React Native</li>
                  <li>UI/UX design, Figma</li>
                  <li>Python</li>
               </ul>
            </div>
         </div>
      </div>
   );
};
export default About