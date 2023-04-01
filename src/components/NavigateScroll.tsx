import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import usePageScroll from '../hooks/usePageScroll'
import { useDispatch } from "react-redux";
import { setDirectionScroll } from "../store/gsap/gsapSlice";

interface INavigateScroll {
  arr: string[],
  power?: number,
  delay?: number,
  distance?: number,
  children: React.ReactNode
  setDirection?: any,
}

const NavigateScroll = ({ arr, power = 20, delay = 500, distance = 5, children }: INavigateScroll) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const pagesRef = useRef(null);
  const [isPageTop, isPageBottom] = usePageScroll(distance)
  const [isNavigate, setIsNavigate] = useState(false)


  function handleWheel(event: React.WheelEvent) {
    // console.log(event.deltaY)
    if (!isNavigate && Math.abs(event.deltaY) > power) {
      setIsNavigate(true)
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollBottom = window.innerHeight;
      if (event.deltaY > 0 && (scrollHeight - scrollBottom < 20 || isPageBottom)) {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] === pathname) {
            dispatch(setDirectionScroll(1))
            navigate(arr[i + 1])
            document.documentElement.scrollTo(0, 0)
          }
        }
      }
      if (event.deltaY < 0 && isPageTop) {
        for (let i = arr.length - 1; i > 0; i--) {
          if (arr[i] === pathname) {
            dispatch(setDirectionScroll(-1))
            navigate(arr[i - 1])
            document.documentElement.scrollTo(0, 0)
          }
        }
      }
      setTimeout(() => {
        setIsNavigate(false);
      }, delay);
    }
  }

  const handleScroll = () => {
    document.documentElement.scrollTo(0, 0);
  }

  useEffect(() => {
    if (isNavigate) {
      window.scrollTo(0, 0);
      window.addEventListener('scroll', handleScroll);

      setTimeout(() => {
        window.removeEventListener('scroll', handleScroll);
      }, 700)
    }
  }, [pathname])


  return (
    <div ref={pagesRef} onWheel={handleWheel}>
      {children}
    </div>
  );
};
export default NavigateScroll