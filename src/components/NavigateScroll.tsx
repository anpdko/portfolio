import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import usePageScroll from '../hooks/usePageScroll';
import { useDispatch } from "react-redux";
import { setDirectionScroll } from "../store/gsap/gsapSlice";


interface INavigateScroll {
  arrRoute: string[],
  power?: number,
  delay?: number,
  distance?: number,
  children: React.ReactNode,
}

const NavigateScroll = ({ arrRoute, power = 20, delay = 500, distance = 5, children }: INavigateScroll) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pagesRef = useRef<HTMLDivElement>(null);
  const [isPageTop, isPageBottom] = usePageScroll(distance);
  const [isNavigate, setIsNavigate] = useState(false);

  const pagesScroll = (diff: number) => {
    if (!isNavigate && Math.abs(diff) > power) {
      setIsNavigate(true);
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollBottom = window.innerHeight;
      const routeIndex = arrRoute.indexOf(pathname);
      if (diff > 0 && (scrollHeight - scrollBottom < 20 || isPageBottom)) {
        dispatch(setDirectionScroll(1));
        navigate(arrRoute[routeIndex + 1]);
        document.documentElement.scrollTo(0, 0);
      } else if (diff < 0 && isPageTop) {
        dispatch(setDirectionScroll(-1));
        navigate(arrRoute[routeIndex - 1]);
        document.documentElement.scrollTo(0, 0);
      }
      setTimeout(() => {
        setIsNavigate(false);
      }, delay);
    }
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    pagesScroll(event.deltaY);
  };

  let yDown: number | null = null;

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    yDown = event.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    yDown = null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!yDown) { return;}
    const yUp = event.touches[0].clientY;
    const yDiff = yDown - yUp;
    pagesScroll(yDiff);
  };

  const handleScroll = () => {
    document.documentElement.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isNavigate) {
      window.scrollTo(0, 0);
      window.addEventListener('scroll', handleScroll);

      setTimeout(() => {
        window.removeEventListener('scroll', handleScroll);
      }, 700);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div
      ref={pagesRef}
      onWheelCapture={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>

      {children}
    </div>
  );
};

export default NavigateScroll;
