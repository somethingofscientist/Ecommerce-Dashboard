import React from 'react'
import styles from './A404Screen.module.css';


const A404Screen = () => {
  return (
    <div className={styles.screen}>
      <img
        src="https://i.pinimg.com/originals/a1/77/df/a177dfc84703c31afa0d501ccf43fe4f.gif"
        alt="404"
      />
      <p>
        We Are Working On It ...
      </p>
    </div>
  )
}

export default A404Screen;