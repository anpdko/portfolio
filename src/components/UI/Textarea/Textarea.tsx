import React from 'react'
import s from './Textarea.module.scss'

interface ITextarea {
   placeholder?: string;
   className?: string;
   value?: string; 
   onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Textarea = ({placeholder, value, onChange, className, ...props}:ITextarea) => {
   return (
      <textarea 
         {...props} 
         className={`${s.text} ${className}`} 
         placeholder={placeholder}
         value={value}
         onChange={onChange}
      >
         
      </textarea>
   );
};
export default Textarea