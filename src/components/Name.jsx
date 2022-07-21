import React from "react";
import styles from '../styles/styles.module.scss'


const Name = () =>{
    return(
        <div className={styles.nameContainer}>
            <h2 className={styles.nameTitulo}>Name</h2>
            <input className={styles.nameInput} type="text" placeholder="Website color scheme"/>
            <button className={styles.nameButton}>+</button>   
        </div>
    )
}


export default Name;