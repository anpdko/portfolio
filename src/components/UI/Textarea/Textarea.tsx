import React from 'react'
import s from './Textarea.module.scss'

interface ITextarea {
   placeholder?: string;
   className?: string;
}

const Textarea = ({placeholder, className, ...props}:ITextarea) => {
   return (
      <textarea {...props} className={`${s.text} ${className}`} placeholder={placeholder}>
         
      </textarea>
   );
};
export default Textarea