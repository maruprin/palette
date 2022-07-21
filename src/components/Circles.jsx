import React, { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import styles from '../styles/styles.module.scss'
import { BsFillCircleFill } from "react-icons/bs";
import Component from "./ColorPicker";


const Circles = () =>{
    const [circleOn, setCircleOn] = useState(false)
    const [circle2On, setCircle2On] = useState(false)
    const [circle3On, setCircle3On] = useState(false)
    const [circle4On, setCircle4On] = useState(false)
    const [circle5On, setCircle5On] = useState(false)
    return(
   <>
       <div className={styles.circlesContainer}>

    <span onClick={()=>{setCircleOn(!circleOn)}} > {!circleOn ? (<span className={styles.circleBefore}><BiPlusCircle/></span> ) : (<span style={{color: 'rgb(28, 201, 155)'}} className={styles.circleAfter}><BsFillCircleFill/></span> ) } </span>

    <span onClick={()=>{setCircle2On(!circle2On)}} > {!circle2On ? (<span  className={styles.circleBefore}><BiPlusCircle/></span> ) : (<span className={styles.circleAfter}><BsFillCircleFill/></span> ) } </span>

    <span onClick={()=>{setCircle3On(!circle3On)}} > {!circle3On ? (<span className={styles.circleBefore}><BiPlusCircle/></span> ) : (<span className={styles.circleAfter}><BsFillCircleFill/></span> ) } </span>

    <span onClick={()=>{setCircle4On(!circle4On)}} > {!circle4On ? (<span className={styles.circleBefore}><BiPlusCircle/></span> ) : (<span className={styles.circleAfter}><BsFillCircleFill/></span> ) } </span>

    <span onClick={()=>{setCircle5On(!circle5On)}} > {!circle5On ? (<span className={styles.circleBefore}><BiPlusCircle/></span> ) : (<span className={styles.circleAfter}><BsFillCircleFill/></span> ) } </span>
       
       </div> 
       <Component />
</>
    )
}


export default Circles;