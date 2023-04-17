import React from 'react'
import styles from './Alert.module.scss'
import Button from '../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store/store';
import { closeAlert } from '../../../store/alert/alertSlice';
import { useGsapFrom } from '../../../hooks/useGsap'


const Alert = () => {
   const {messageAlert, showAlert} = useSelector((state:RootState) => state.alert)
   const dispatch = useDispatch()

   const refBack = useGsapFrom({
      opacity: 0, duration: 0.3
   })

   const close = () => {
      dispatch(closeAlert())
   }

   if(!showAlert) {
      return <div></div>
   }

   return (
      <div className={styles.background} onClick={close} ref={refBack}>
         <div className={styles.box} onClick={(e)=>e.stopPropagation()}>
            <div className={styles.btns}>
               <i className="bi bi-x-lg" onClick={close}></i>
            </div>
            <h3>{messageAlert}</h3>
            <Button onClick={close}>Ок</Button>
         </div>
      </div>
   );
};
export default Alert