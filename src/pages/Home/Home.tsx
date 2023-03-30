import React from 'react'
import s from './Home.module.scss'
import Button from '../../components/UI/Button/Button';
import mImg from '../../assets/images/icons/m.png'
import eImg from '../../assets/images/icons/e.png'
import rImg from '../../assets/images/icons/r.png'
import nImg from '../../assets/images/icons/n.png'
import hiImg from '../../assets/images/icons/hi.svg'
import ukImg from '../../assets/images/icons/ukr.svg'


const Home = () => {
   return (
      <div className={s.home}>
         <h1>
            Front-End React Developer
            <span className={s.hi_box}>
               <svg className={s.hi} width="88" height="57" viewBox="0 0 88 57" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M20.4845 0.0473541C16.8075 0.54248 12.9783 2.02353 9.89026 4.14481C9.17967 4.63302 7.77796 5.84948 6.77522 6.8482C3.68378 9.92757 1.66192 13.4533 0.546 17.7105C0.0479868 19.611 0.0152568 19.9292 0.000614404 23.0181C-0.0195404 27.3021 0.451772 29.6064 2.06536 33.1127C3.62521 36.502 6.97901 40.4372 10.0779 42.5142C12.9033 44.4083 16.4092 45.8278 19.4939 46.3272L20.7429 46.5294L20.7435 50.857C20.7441 54.8704 20.769 55.2258 21.0865 55.7484C21.573 56.5497 22.3918 56.9993 23.3657 57C24.1463 57.0007 24.4996 56.7868 31.9258 51.8199L39.672 46.6394L53.9368 46.5757C66.6159 46.5192 68.3354 46.4796 69.4073 46.2189C78.7433 43.9493 85.3792 37.4104 87.5998 28.2927C87.949 26.8596 88 26.2192 88 23.2775C88 20.3358 87.949 19.6954 87.5998 18.2622C86.4632 13.5956 84.1515 9.56612 80.763 6.34616C77.6986 3.43403 74.1652 1.54173 69.6657 0.402918C68.2071 0.0338648 68.1101 0.0323078 44.6013 0.00515631C31.6213 -0.00988944 20.7687 0.00913449 20.4845 0.0473541Z" />
               </svg>
               <span className={s.hi_text}>HI!</span>
            </span>
         </h1>
         <p className='gray'>Hi, I'm Andrii Priadko. A passionate Front-end React Developer based in Ukraine.<img src={ukImg} alt='UK' /></p>
         <div className={s.row}>
            <Button>Download CV</Button>
            <div className={s.stack_box}>
               <h4>Stack MERN</h4>
               <span className={s.line}></span>
               <ul className={s.stacks}>
                  <li><img src={mImg} alt="M" /></li>
                  <li><img src={eImg} alt="E" /></li>
                  <li><img src={rImg} alt="R" /></li>
                  <li><img src={nImg} alt="N" /></li>
               </ul>
            </div>
         </div>
      </div>
   );
};
export default Home