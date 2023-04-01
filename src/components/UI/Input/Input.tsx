import React from 'react'
import styles from './Input.module.scss'

interface IInput{
   className?:string;
   children?:any;
   type?:string;
   placeholder?:string;
} 

const Input = ({className, children, type = 'text', placeholder,  ...props}:IInput) => {

   return (
      <div className={styles.box_input}>
         <span className={styles.icon}>
            {children}
         </span>

         <input 
            placeholder={placeholder}
            style={{paddingLeft: children?'3rem':'20px'}}
            {...props} 
            className={`${styles.input} ${className}`} 
            type={type}
         />

      </div>
   );
};

export default Input

