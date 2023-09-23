import React, { useState } from 'react';
import styles from './Create.module.css';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    username: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev, [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      name: '',
      email: '',
      password: '',
      username: '',
    });
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <h1
          style={{
            margin: "20px"
          }}
        >
          Create An <span className={styles.amazingText} >Amazing</span> Account
        </h1>
        <input
          type="text"
          name="name"
          placeholder='Name'
          value={form.name} // Update to use form.name
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder='Email'
          value={form.email} // Update to use form.email
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder='Username'
          value={form.username} // Update to use form.username
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder='Password'
          value={form.password} // Update to use form.password
          onChange={handleChange}
        />
        <button
          type='submit'>
          Create
        </button>
      </form>
    </div >
  );
};

export default CreateAccount;
