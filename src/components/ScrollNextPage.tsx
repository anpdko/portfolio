import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface INavigateScroll {
   children: React.ReactNode,
   id: string,
}


const ScrollNextPage = ({ children, id }: INavigateScroll) => {
   const { ref, inView, entry } = useInView({ threshold: 0.1 });

    useEffect(() => {
      if(inView){
         const element = document.getElementById(id);
         if (element) {
            const isOnTopScroll = entry?.boundingClientRect.y
            let scrollTop = 0;
            if(Number(isOnTopScroll) < 0){
               scrollTop = element.offsetTop + element.offsetHeight - window.innerHeight;
            }
            else {
               scrollTop = element.offsetTop
            }
            window.scrollTo({
               top: scrollTop,
               behavior: 'smooth'
             });
          }
      }
    }, [inView, id, entry?.boundingClientRect.y])

   return (
      <div ref = {ref} style={{width: "100%"}}>
         {children}
      </div>
   );
};
export default ScrollNextPage