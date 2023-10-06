import styles from './Header.module.css';
import { HomeScreen } from '../../screens/homeScreen/HomeScreen';
import LoginScreen from '../../screens/loginScreen/LoginScreen';
import logo from '../../assets/iceCream.jpg';

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BsGlobe2, BsFillCartCheckFill } from 'react-icons/bs'
import Switch from 'react-switch';

const Header = () => {
    const [isLogin, setisLogin] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleChange = (newChecked) => {
        setChecked(newChecked);
    };

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
                        <BsFillCartCheckFill
                            size={50}
                        />
                        {/* <img src="https://clipart-library.com/img1/764205.png" alt="" /> */}
                    </div>
                </Link>
            </div>
            <div className={styles.right}>
                {
                    isLogin ?
                        (<>
                            <div className={
                                styles.link
                            }
                            >
                                <Link to="/">Products</Link></div>
                            <div className={styles.link}>
                                <Link to="/add">Add Product</Link>
                            </div>
                            {/* <div className={styles.link}>
                                <Link to="/update">Update Product</Link>
                            </div> */}
                            <div
                                className={styles.link}
                                onClick={handleLogout}
                            >
                                <Link to="/login">
                                    Logout
                                </Link>
                            </div>
                            <div className={styles.link}>
                                <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                    onColor="#86d3ff"
                                    onHandleColor="#8093s6"
                                    handleDiameter={20}
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                    height={20}
                                    width={48}
                                    className="react-switch"
                                    id="material-switch"
                                />
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