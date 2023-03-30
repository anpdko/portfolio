import React from 'react'
import s from './Button.module.scss'


interface IButton {
   children: any
   className?: string
}

const Button = ({children, className, ...props}:IButton) => {
   return (
      <button {...props} 
         className={[s.btn, s.btn_fill, className].join(" ")}>
         {children}
      </button>
   );
};
export default Button