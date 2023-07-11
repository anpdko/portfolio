import home from '../assets/images/icons/home.png'
import about from '../assets/images/icons/about.png'
import portfolio from '../assets/images/icons/portfolio.png'
import contact from '../assets/images/icons/contact.png'
import skill from '../assets/images/icons/skills.png'

interface IItemNavigation {
   id: number
   path: string
   alt: string
   src: string
}

const navigation: IItemNavigation[] = [
   {
      id: 1,
      path: 'home',
      alt: "Home",
      src: home
   },
   {
      id: 2,
      path: 'about',
      alt: "About",
      src: about
   },
   {
      id: 5,
      path: 'skills',
      alt: "Skills",
      src: skill
   },
   {
      id: 3,
      path: 'portfolio',
      alt: "Portfolio",
      src: portfolio
   },
   {
      id: 4,
      path: 'contact',
      alt: "Contact",
      src: contact
   }
]

export default navigation