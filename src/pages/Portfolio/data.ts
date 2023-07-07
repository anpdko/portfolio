import gifCoffeeRoasters from '../../assets/images/project/coffee roasters.gif'
import gifGithubInterview from '../../assets/images/project/github interview.gif'
import gifLibraryBookMdpu from '../../assets/images/project/library book mdpu.gif'
import gifSocialNetwork from '../../assets/images/project/social network.gif'
import gifSaasto from '../../assets/images/project/saasto.gif'
import gifVilnyy from '../../assets/images/project/vilnyy.gif'
import gifSpace from '../../assets/images/project/space.gif'
// import gifNotepad from '../../assets/images/project/notepad react.gif'
// import grfEnglishThousandWords from '../../assets/images/project/english thousand words.gif'
// import grfGames from '../../assets/images/project/games.gif'

export interface IPortfolioCard {
   id: number
   title: string
   description: string
   technology: string[]
   img: string
   gif: string
   link: string
   github: string
}

const portfolioData:IPortfolioCard[] = [
   {
      id: 0,
      title: 'Social Network',
      description: 'A social network where you can add, like, save, and comment on posts with code. You can also follow people. All images are stored on Google Drive.',
      technology: ['React', 'Redux', 'Express', 'Mongoose'],
      img: '',
      gif: gifSocialNetwork,
      link: 'https://sit-net.netlify.app/',
      github: 'https://github.com/anpdko/social-network-client'
   },
   {
      id: 7,
      title: 'Organization Vilnyy',
      description: 'Freelance product. Working with a designer. Helping young people realize their potential through the introduction of the idea of community life.',
      technology: ['React', 'TypeScript', 'SCSS', 'GSAP'],
      img: '',
      gif: gifVilnyy,
      link: 'https://vilnyy.netlify.app/',
      github: 'https://github.com/anpdko/vilnyy'
   },
   {
      id: 8,
      title: 'Space-Tourism',
      description: 'Pet project to explore new technologies Vue.js and Three.js. Space tourism multi-page 3D website.',
      technology: ['Vue.js', 'Three.js', 'SCSS', 'GSAP'],
      img: '',
      gif: gifSpace,
      link: '',
      github: 'https://github.com/anpdko/space-vue-three'
   },
   {
      id: 5,
      title: 'SaaSto',
      description: 'Website landing page for a mobile application. Gsap and svg animations were used.',
      technology: ['React', 'SCSS', 'GSAP'],
      img: '',
      gif: gifSaasto,
      link: 'https://saa-sto.netlify.app',
      github: 'https://github.com/anpdko/saasto'
   },
   {
      id: 1,
      title: 'Library-book MDPU',
      description: 'The university library with easy book search, preview, and download options. There is an admin panel for the librarian.',
      technology: ['React', 'Redux', 'Express', 'Mongoose'],
      img: '',
      gif: gifLibraryBookMdpu,
      link: 'https://mdpu.netlify.app/',
      github: 'https://github.com/anpdko/library_book_mdpu_client'
   },
   {
      id: 2,
      title: 'Coffee Roasters',
      description: "A landing website for a coffee shop. Different animations are applied while scrolling the page.",
      technology: ['HTML', 'SCC', 'JS', 'GSAP'],
      img: '',
      gif: gifCoffeeRoasters,
      link: 'https://anpdko.github.io/coffee-roasters/',
      github: 'https://github.com/anpdko/coffee-roasters'
   },
   {
      id: 3,
      title: 'Github Interview',
      description: 'A test task done in one evening. Most of the necessary technologies for a React Development position are applied.',
      technology: ['React', 'SCSS', 'API'],
      img: '',
      gif: gifGithubInterview,
      link: 'https://dazzling-heliotrope-bc02a1.netlify.app/',
      github: 'https://github.com/anpdko/github-interview-app'
   }
   // {
   //    id: 4,
   //    title: 'Notepad',
   //    description: 'Browser-based quick notes with convenient search and tag-based filtering. Authorization is done via Google account.',
   //    technology: ['React', 'SCSS', 'Firebase'],
   //    img: '',
   //    gif: gifNotepad,
   //    link: 'https://ubiquitous-manatee-cde585.netlify.app/',
   //    github: 'https://github.com/anpdko/notepad-react'
   // },

   // {
   //    id: 4,
   //    title: 'Scroll Games',
   //    description: 'Один з перших красивих проектів щодо вибору та перегляду роликів ігор. На сайті використовуються скрол і ефект туману під час руху мишки. Без адаптиву.',
   //    technology: ['React', 'SCSS', 'Express', 'Mongoose'],
   //    img: '',
   //    gif: grfGames,
   //    link: 'https://anpdko.github.io/games-site-html-css/',
   //    github: 'https://github.com/anpdko/games-site-html-css'
   // },
   // {
   //    id: 6,
   //    title: 'English Thousand Words',
   //    description: 'Програма за один вечір для вивчення 1000 найпопулярніших слів в англійській мові. При виборі голос навчає слово. Голоси можна міняти.',
   //    technology: ['React', 'SCSS', 'Express', 'Mongoose'],
   //    img: '',
   //    gif: grfEnglishThousandWords,
   //    link: 'https://english-thousand.netlify.app/',
   //    github: 'https://github.com/anpdko/english-thousand-words'
   // },
]

export { portfolioData }