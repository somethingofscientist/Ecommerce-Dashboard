import React, { useEffect, useState } from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { HomeScreen } from '../../screens/homeScreen/HomeScreen';
import LoginScreen from '../../screens/loginScreen/LoginScreen';
import logo from '../../assets/iceCream.jpg';

const Header = () => {
    const [isLogin, setisLogin] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem("user credentials");
        setisLogin(!!auth)
    }, [])

    const handleLogout = () => {
        localStorage.clear();
        setisLogin(false);
    }


    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <Link to="/">
                    <div className={styles.logo}>
                        <img src="https://clipart-library.com/img1/764205.png" alt="" />
                    </div>
                </Link>
            </div>
            <div className={styles.right}>
                {
                    isLogin ?
                        (<>
                            <div className= {
    styles.link
}

><Link to="/">Products</Link></div>
                            <div className={styles.link}>
                                <Link to="/add">Add Product</Link>
                            </div>
                            <div className={styles.link}>
                                <Link to="/update">Update Product</Link>
                            </div>
                            <div
                                className={styles.link}
                                onClick={handleLogout}
                            >
                                <Link to="/login">
                                    Logout
                                </Link>
                            </div>
                        </>)
                        :
                        (<>
                            <div className={styles.link}>
                                <Link to="/create">
                                    Create
                                </Link>
                            </div>
                            <div className={styles.link}>
                                <Link to="/login">
                                    Login
                                </Link>
                            </div>
                        </>)
                }
            </div>
        </div>
    )
}

export default Header