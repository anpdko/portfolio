import React from 'react'
import s from './Navbar.module.scss'
import home from '../../assets/images/icons/home.png'
import about from '../../assets/images/icons/about.png'
import portfolio from '../../assets/images/icons/portfolio.png'
import contact from '../../assets/images/icons/contact.png'
import { Link, useLocation } from 'react-router-dom'

interface IItemData {
   id: number
   path: string
   alt: string
   src: string
}

interface IStyleLi {
   mixBlendMode: 'luminosity' | 'normal';
}

const data:IItemData[] = [
   {
      id: 1,
      path: '/',
      alt: "Home",
      src: home
   },
   {
      id: 2,
      path: '/about',
      alt: "About",
      src: about
   },
   {
      id: 3,
      path: '/portfolio',
      alt: "Portfolio",
      src: portfolio
   },
   {
      id: 4,
      path: '/contact',
      alt: "Contact",
      src: contact
   }
]

const Navbar = () => {
   const path = useLocation().pathname

   const isLuminosity = (pathItem: string):IStyleLi => {
      if(path !== pathItem){
         return {mixBlendMode: 'luminosity'}
      }
      return {mixBlendMode: 'normal'}
   }

   return (
      <nav className={s.navbar}>
         <ul className={s.menu}>
            {data.map(item =>
               <li key={item.id} className={s.icon} 
               style={isLuminosity(item.path)}>
                  <Link to={item.path}>
                     <img src={item.src} alt={item.alt} />
                  </Link>
               </li>
            )}
         </ul>
      </nav>
   );
};
export default Navbar