import React from "react";
import { IoColorPaletteOutline } from "react-icons/io5";
import styles from '../styles/styles.module.scss'


const Header = () => {
return(
    <div>
    <span className={styles.headerIcono}><IoColorPaletteOutline/></span>
    <h1 className={styles.headerTitulo}>Color palette generator</h1>
    </div>
)
}

export default Header;