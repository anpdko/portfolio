import React, { useEffect, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'

import { setTheme } from '../../store/theme/themeSlice'
import s from './Theme.module.scss'

interface ITheme {
  className?:string
}

const Theme:FC<ITheme> = ({ className }) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleChange = () => dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))

  return (
    <div onClick={handleChange} className={`${s.theme} ${className}`}>
      <div
        className={`${s.root} ${theme === 'dark' ? s.dark : s.light}`}
      />
    </div>
  )
}

export default Theme