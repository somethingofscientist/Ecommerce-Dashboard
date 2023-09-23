import React from 'react'
import styles from './Login.module.css';
import { Link } from 'react-router-dom';


const LoginScreen = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login button clicked...')
    }
    return (
        <>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Username'
                    />
                    <input
                        type="password"
                        placeholder='Password'
                    />
                    <button
                        type='submit'>
                        Login
                    </button>


                    <Link to='/create'>
                        <button>
                            Create An Account
                        </button>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default LoginScreen