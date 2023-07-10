import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface INavigateScroll {
   children: React.ReactNode,
   id: string,
}


const ScrollNextPage = ({ children, id }: INavigateScroll) => {
   const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
      if(inView){
         const element = document.getElementById(id);
         if (element) {
            const scrollTop = element.offsetTop
            window.scrollTo({
              top: scrollTop,
              behavior: 'smooth'
            });
          }
      }
    }, [inView, id])

   return (
      <div ref = {ref}>
         {children}
      </div>
   );
};
export default ScrollNextPage