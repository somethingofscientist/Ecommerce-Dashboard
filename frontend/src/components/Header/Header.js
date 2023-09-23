import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { HomeScreen } from '../../screens/homeScreen/HomeScreen';
import LoginScreen from '../../screens/loginScreen/LoginScreen';
import logo from '../../assets/iceCream.jpg';

const Header = () => {
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
                <div className={styles.link}>
                    <Link to="/">Products</Link>
                </div>
                <div className={styles.link}>
                    <Link to="/profile">Profile</Link>
                </div>
                <div className={styles.link}>
                    <Link to="/login">Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default Header