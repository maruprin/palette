import { CompactPicker } from 'react-color'
import React from 'react'
import styles from '../styles/styles.module.scss'

class Component extends React.Component {

    render() {
      return (<div className={styles.colorPicker}>
      <CompactPicker onChange={(event)=>console.log(event)}/>
      </div>
    ) }
  }

  export default Component;