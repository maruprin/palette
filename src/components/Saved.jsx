import React from "react";
import styles from '../styles/styles.module.scss'
import { BsFillCircleFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";


const Saved = () =>{
    
    return(
        <>
        <div className={styles.savedContainer}>
        <div className={styles.savedNombrePalette}>Saved palettes</div>
        <br/>
        <div>
            <span className={styles.savedTitulo}>80s vibes</span>
            
            <div className={styles.savedIconoBin}><RiDeleteBin5Fill/></div>
            <div className={styles.savedCirclesContainer}>
            <span className={styles.savedCircle}><BsFillCircleFill/></span>
            <span className={styles.savedCircle}><BsFillCircleFill/></span>
            <span className={styles.savedCircle}><BsFillCircleFill/></span>
            <span className={styles.savedCircle}><BsFillCircleFill/></span>
            <span className={styles.savedCircle}><BsFillCircleFill/></span>

            </div>
        </div>
        </div>
        </>
    )
}

export default Saved