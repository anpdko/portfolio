import React, { useCallback, useEffect, useState } from 'react'
import s from './SnakeGame.module.scss'

const SIZE = 60
let widthCol = Math.floor(window.innerWidth / SIZE) - 1
let heightCol = Math.floor(window.innerHeight / SIZE) - 1
const START_TAILS = [{ x: -SIZE * 2, y: 0 }, { x: -SIZE, y: 0 }, { x: 0, y: 0 }]
const START_DIREC = { dx: SIZE, dy: 0 }
const SPEED = 200
const START_BERRY = {
   x: Math.floor(widthCol / 2) * SIZE,
   y: Math.floor(heightCol / 2) * SIZE
}

const SnakeGame = () => {
   const [snakeTails, setSnakeTails] = useState(START_TAILS)
   const [snakeDirec, setSnakeDirec] = useState(START_DIREC)
   const [countKey, setCountKey] = useState(0)
   const [autoGame, setAutoGame] = useState(true)
   const [runGame, setRunGame] = useState(window.innerWidth > 860)
   const [berry, setBerry] = useState(START_BERRY)

   const rundomBerry = () => {
      const newBerry = {
         x: Math.floor(Math.random() * (widthCol - 1)) * SIZE,
         y: Math.floor(Math.random() * (heightCol - 1)) * SIZE
      }
      return newBerry
   }

   const restart = () => {
      setSnakeTails(START_TAILS)
      setSnakeDirec(START_DIREC)
      setBerry(START_BERRY)
      setAutoGame(true)
   }

   const collisionsBorder = (newTail) => {
      if (newTail.x < 0) {
         newTail.x = widthCol * SIZE
      }
      else if (newTail.x > widthCol * SIZE) {
         newTail.x = 0
      }
      if (newTail.y < 0) {
         newTail.y = heightCol * SIZE
      }
      else if (newTail.y > heightCol * SIZE) {
         newTail.y = 0
      }
      return newTail
   }

   const checkIsTail = useCallback((newTail) => {
      const newTailTemp = collisionsBorder(newTail)
      return snakeTails.some(tail => tail.x === newTailTemp.x && tail.y === newTailTemp.y)
   }, [snakeTails])

   const autoGameSnake = useCallback(() => {
      const lastTail = snakeTails[snakeTails.length - 1]
      const distanceToBerryX = berry.x - lastTail.x
      const distanceToBerryY = berry.y - lastTail.y
      let nextSnakeDirec = null

      if (Math.abs(distanceToBerryX) > Math.abs(distanceToBerryY) && distanceToBerryX < 0 && snakeDirec.dx !== SIZE) {
         nextSnakeDirec = { dx: -SIZE, dy: 0 }
      }
      else if (distanceToBerryX > distanceToBerryY && distanceToBerryX > 0 && snakeDirec.dx !== -SIZE) {
         nextSnakeDirec = { dx: SIZE, dy: 0 }
      }

      if (Math.abs(distanceToBerryX) < Math.abs(distanceToBerryY) && distanceToBerryY < 0 && snakeDirec.dy !== SIZE) {
         nextSnakeDirec = { dx: 0, dy: -SIZE }
      }
      else if (distanceToBerryX < distanceToBerryY && distanceToBerryY > 0 && snakeDirec.dy !== -SIZE) {
         nextSnakeDirec = { dx: 0, dy: SIZE }
      }

      nextSnakeDirec = nextSnakeDirec === null ? snakeDirec : nextSnakeDirec

      const isTail = checkIsTail({
         x: lastTail.x + nextSnakeDirec.dx,
         y: lastTail.y + nextSnakeDirec.dy,
      })

      if (isTail) {
         if (!checkIsTail({ x: lastTail.x + -SIZE, y: lastTail.y })) {
            nextSnakeDirec = { dx: -SIZE, dy: 0 }
         }
         else if (!checkIsTail({ x: lastTail.x + SIZE, y: lastTail.y })) {
            nextSnakeDirec = { dx: SIZE, dy: 0 }
         }
         else if (!checkIsTail({ x: lastTail.x, y: lastTail.y + -SIZE })) {
            nextSnakeDirec = { dx: 0, dy: -SIZE }
         }
         else if (!checkIsTail({ x: lastTail.x, y: lastTail.y + SIZE })) {
            nextSnakeDirec = { dx: 0, dy: SIZE }
         }
      }
      setSnakeDirec(nextSnakeDirec)
      return nextSnakeDirec

   }, [berry.x, berry.y, snakeTails, checkIsTail, snakeDirec])



   const game = useCallback(() => {
      if (runGame) {
         const lastIndex = snakeTails.length - 1
         let nextSnakeDirec = snakeDirec

         if (autoGame) {
            nextSnakeDirec = autoGameSnake()
         }

         let newTail = {
            x: snakeTails[lastIndex].x + nextSnakeDirec.dx,
            y: snakeTails[lastIndex].y + nextSnakeDirec.dy
         }
         newTail = collisionsBorder(newTail)

         // check tail collision
         const isTail = checkIsTail(newTail)
         if (isTail) {
            return restart()
         }

         // collision berry
         if (newTail.x === berry.x && newTail.y === berry.y) {
            setBerry(rundomBerry())
            setSnakeTails([...snakeTails, newTail])
         }
         else {
            setSnakeTails([...snakeTails.filter((_, tailIndex) => tailIndex), newTail])
         }
      }

   }, [snakeTails, berry.x, berry.y, autoGameSnake, checkIsTail, autoGame, snakeDirec, runGame])

   useEffect(() => {
      const intervalId = setInterval(game, SPEED)
      return () => {
         clearInterval(intervalId)
      }
   }, [game])


   const keyDown = (event) => {
      setCountKey(countKey + 1)
      let key = event.key
      if ((key === 'w' || key === 'ArrowUp') && snakeDirec.dy !== SIZE) {
         setSnakeDirec({ dx: 0, dy: -SIZE })
         setAutoGame(false)
      }
      if ((key === 'a' || key === 'ArrowLeft') && snakeDirec.dx !== SIZE) {
         setSnakeDirec({ dx: -SIZE, dy: 0 })
         setAutoGame(false)
      }
      if ((key === 's' || key === 'ArrowDown') && snakeDirec.dy !== -SIZE) {
         setSnakeDirec({ dx: 0, dy: SIZE })
         setAutoGame(false)
      }
      if ((key === 'd' || key === 'ArrowRight') && snakeDirec.dx !== -SIZE) {
         setSnakeDirec({ dx: SIZE, dy: 0 })
         setAutoGame(false)
      }
   }
   useEffect(() => {
      window.addEventListener('keydown', keyDown)
      return () => {
         window.removeEventListener('keydown', keyDown)
      }
   })

   // change resize window
   const resize = () => {
      widthCol = Math.floor(window.innerWidth / SIZE) - 1
      heightCol = Math.floor(window.innerHeight / SIZE) - 1
      setRunGame(window.innerWidth > 860)
   }
   useEffect(() => {
      window.addEventListener('resize', resize)
      return () => {
         window.removeEventListener('resize', resize)
      }
   })

   //setAutoGame after 3500 ms
   useEffect(() => {
      let timeoutID = setTimeout(() => setAutoGame(true), 5000)
      return () => clearTimeout(timeoutID);
   }, [countKey])

   return (
      <div className={s.back}>
         {runGame &&
            <div className={s.map} style={{ opacity: autoGame ? 0.1 : 0.5 }}>
               {snakeTails.map((elem, index) =>
                  <div
                     style={{
                        width: SIZE + 'px',
                        height: SIZE + 'px',
                        left: elem.x + "px",
                        top: elem.y + "px",
                        opacity: index === snakeTails.length - 1 ? 1 : 0.7,
                        filter: `blur(${autoGame ? 3 : 1}px)`
                     }}
                     key={index}
                     className={s.snake}
                  ></div>
               )}
               <div
                  style={{
                     width: SIZE + 'px',
                     height: SIZE + 'px',
                     left: berry.x + "px",
                     top: berry.y + "px",
                     filter: `blur(${autoGame ? 3 : 1}px)`
                  }}
                  className={s.berry}
               ></div>
            </div>
         }
      </div>
   );
};
export default SnakeGame