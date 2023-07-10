import React, {useState} from 'react'
import s from './Navbar.module.scss'
import { useGsapFrom } from '../../hooks/useGsap';
import { Link } from 'react-scroll';
import navigation from '../../data/nevigation'

const MenuNavbar = () => {
   const [activePage, setActivePage] = useState('');


   function handleSetActive(to: any) {
      setActivePage(to)
      return "tyuui"
   }

   const clickLink = (link: string) => {
      setTimeout(() => {
         setActivePage(link)
      }, 400)
   }

   return (
      <ul className={s.menu}>
         {navigation.map(item =>
            <li 
               key={item.id} 
               className={`${s.icon} ${item.path === activePage ? s.active : ''}`}
            >
               <Link 
                  onClick={() => clickLink(item.path)}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={400}
                  onSetActive={handleSetActive}
               >
                  <img src={item.src} alt={item.alt} />
               </Link>
            </li>
         )}
      </ul>
   )
}

const Navbar = () => {
   const navRef = useGsapFrom({ opacity: 0, x: 50 });

   return (
      <nav className={s.navbar} ref={navRef}>
         <MenuNavbar/>
      </nav>
   );
};
export default Navbar