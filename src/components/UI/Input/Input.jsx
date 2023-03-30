import React, { useState, forwardRef } from 'react'
import styles from './Input.module.scss'
import {Eye, EyeSlash} from 'react-bootstrap-icons'

const Input = forwardRef(({icon, error, type, ...props}, ref) => {
   const [eye, setEye] = useState(true)
   return (
      <div className={styles.cont_input}>
         <div className={styles.box_input}>
            <span className={styles.icon}>
               {icon}
            </span>

            <input {...ref} {...props} className={styles.input} type={eye?type:'text'}/>

            {type === 'password' && 
               <span className={styles.eye}>
                  {eye
                  ? <Eye onClick={()=>setEye(false)}/>
                  : <EyeSlash onClick={()=>setEye(true)}/>}
               </span>
            }

         </div>
         {Array.isArray(error)
         ?error.map((err, index) => 
            err && <p key={index} className={styles.error}> {err?.message || err || "Некоректные данные в поле"} </p>
         )
         :error && <p className={styles.error}> {error?.message|| error || "Некоректные данные в поле"} </p>
         }
      </div>
   );
});
export default Input

