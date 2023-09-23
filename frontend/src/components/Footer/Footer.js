import React from 'react'
import styles from './Footer.module.css';
import logo from '../../assets/iceCream.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <Link to="/">
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                    </div>
                </Link>
            </div>
            <div className={styles.right}>
                
            </div>
        </div>
    )
}

export default Footer