import React from 'react'
import s from './About.module.scss'
import { useTranslation } from 'react-i18next';
import { useGsapFrom } from '../../hooks/useGsap'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';



const About = () => {
   const { t } = useTranslation();
   const { directionScroll } = useSelector((state: RootState) => state.gsap)

   const filter = [t("all"), t("web"), 'react', t("social"), 
   t("animation"), 'backend', t("design"), t("database"), t("more")];

   const refAbout = useGsapFrom({
      opacity: 0, y: 150 * directionScroll
   })

   return (
      <div className={s.about} ref={refAbout}>
         <h4 className='blue'>{t("ABOUT ME")}</h4>
         <h3>{t("I really enjoy what I do⚡")}</h3>
         <p className='gray'>{t("Welcome to my portfolio website! I am a Front-End developer specializing in creating functional web applications using React.")}</p>
         <p className='gray'>{t("Currently, I am looking for an opportunity to join a professional and friendly team. I am ready to work hard towards becoming a professional and achieving my goals. I hope you enjoy my work and see my experience and skills.")}</p>

         <h4 className="blue">{t("FILTER SKILLS")}</h4>
         <div className={s.filter_skills}>
            {filter.map(item => 
               <span>#{item}</span>
            )}
         </div>

         <h4 className="blue">{t("LIST SKILLS")}</h4>
         <div className={s.row_skils}>
            <span>HTML</span>
            <span>CSS</span>
            <span>SCSS</span>
            <span>{t("Responsive")}</span>
            <span>Grid</span>
            <span>HTML</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>ES6</span>
            <span>React</span>
            <span>Redux-toolkit</span>
            <span>RestApi</span>
            <span>Framer Motion</span>
            <span>Gsap</span>
            <span>{t("Communicative")}</span>
            <span>{t("Team-oriented")}</span>
            <span>Git</span>
            <span>Jira</span>
            <span>Express.js</span>
            <span>Postman</span>
            <span>MongoDB</span>
            <span>Firebase</span>
            <span>{t("Mentoring")}</span>
            <span>{t("Public speaking")}</span>
            <span>React Native</span>
            <span>UI/UX design</span>
            <span>Figma</span>
            <span>Python</span>

            {/* <div className={s.col_skils}>
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
            <div className={s.col_skils}>
               <h4 className="blue">EXTRA SKILLS</h4>
               <ul>
                  <li>Express.js, Postman</li>
                  <li>MongoDB, Firebase</li>
                  <li>Mentoring, Public speaking</li>
                  <li>React Native</li>
                  <li>UI/UX design, Figma</li>
                  <li>Python</li>
               </ul>
            </div> */}
         </div>
      </div>
   );
};
export default About