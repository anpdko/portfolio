import { useState, useEffect } from 'react';

export default function usePageScroll(distance:number = 20):boolean[] {
   const [isBottom, setIsBottom] = useState([true, false]);

   const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollBottom = document.documentElement.scrollTop+window.innerHeight;

      const isPageBottom =  scrollHeight-scrollBottom < distance;
      const isPageTop = document.documentElement.scrollTop < distance

      setIsBottom([isPageTop, isPageBottom]);
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll)

      };
   });

   return isBottom;
}