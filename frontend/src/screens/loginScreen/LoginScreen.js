import React, { useEffect, useState } from 'react'
import styles from './Login.module.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const LoginScreen = () => { 

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((obj) => ({
            ...obj,
            [name]: value
        }));
    };

    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user credentials');
        if (auth) {
            navigate('/');
        }
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = form;
            const result = await axios.post("http://localhost:9000/loginUser", {
                email,
                password,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (result.status === 200) {
                toast.success('Login successful');
                localStorage.setItem('user credentials', JSON.stringify(result.data))
                setForm({
                    email: "",
                    password: "",
                })
                navigate('/');
                // redirect('/');  
            }
            else if (result.status !== 200) {
                toast.error('Login unsuccessful')
            }
        } catch (error) {
            toast.dismiss()
            toast.error(error.response.data.error);
        }
    }
    return (
        <>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <h1
                        style={{
                            margin: "20px"
                        }}
                    >
                        Login
                    </h1>
                    <input
                        type="email"
                        name="email"
                        placeholder='email'
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder='password'
                        value={form.password}
                        onChange={handleChange}
                        required
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