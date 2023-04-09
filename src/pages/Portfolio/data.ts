import gifCoffeeRoasters from '../../assets/images/project/coffee roasters.gif'
import gifGithubInterview from '../../assets/images/project/github interview.gif'
import gifLibraryBookMdpu from '../../assets/images/project/library book mdpu.gif'
import grfSocialNetwork from '../../assets/images/project/social network.gif'
import gifNotepad from '../../assets/images/project/notepad react.gif'
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
      description: 'Cоціальна мережа у якій можна додавати, лайкати, зберігати та коментувати пости з кодом. Підписуватись на людей. Всі картинки зберігаються на Google Disc.',
      technology: ['React', 'Redux', 'Express', 'Mongoose'],
      img: '',
      gif: grfSocialNetwork,
      link: 'https://sit-net.netlify.app/',
      github: 'https://github.com/anpdko/social-network-client'
   },
   {
      id: 1,
      title: 'Library-book MDPU',
      description: 'Бібліотека книг університету. З можливістю легкого пошуку книги, перегляду та скачування. Є адмін-панель для бібліотекаря.',
      technology: ['React', 'Redux', 'Express', 'Mongoose'],
      img: '',
      gif: gifLibraryBookMdpu,
      link: 'https://mdpu.netlify.app/',
      github: 'https://github.com/anpdko/library_book_mdpu_client'
   },
   {
      id: 2,
      title: 'Coffee Roasters',
      description: "Сайт лендінг для кав'ярні. Застосування різних анімацій при прокручуванні сторінки.",
      technology: ['HTML', 'SCC', 'JS', 'GSAP'],
      img: '',
      gif: gifCoffeeRoasters,
      link: 'https://anpdko.github.io/coffee-roasters/',
      github: 'https://github.com/anpdko/coffee-roasters'
   },
   {
      id: 3,
      title: 'Github Interview',
      description: 'Тестове завдання, зроблене за один вечір. Застосовується більшість необхідних технологій на позицію React Development',
      technology: ['React', 'SCSS', 'API'],
      img: '',
      gif: gifGithubInterview,
      link: 'https://github.com/anpdko/github-interview-app',
      github: 'https://dazzling-heliotrope-bc02a1.netlify.app/'
   },
   {
      id: 4,
      title: 'Notepad',
      description: 'Браузерні швидкі нотатки, зі зручним пошуком та фільтром по тегах. Авторизація відбувається за допомогою гугл акаунту. Без адаптиву під телефони',
      technology: ['React', 'SCSS', 'Firebase'],
      img: '',
      gif: gifNotepad,
      link: 'https://ubiquitous-manatee-cde585.netlify.app/',
      github: 'https://github.com/anpdko/notepad-react'
   },

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
   //    id: 5,
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