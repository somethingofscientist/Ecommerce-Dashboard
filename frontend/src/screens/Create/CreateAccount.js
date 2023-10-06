import React, { useEffect, useState } from 'react';
import styles from './Create.module.css';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Button, TextField } from '@mui/material';


const CreateAccount = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    username: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const auth = localStorage.getItem('user credentials');
    if (auth) {
      navigate('/');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, username } = form;

    try {
      let result = await axios.post('http://localhost:9000/createUser', {
        name,
        email,
        password,
        username
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (result) {
        toast.success('User Created')
      }

      setForm({
        name: '',
        email: '',
        password: '',
        username: '',
      });

      localStorage.setItem('user credentials', JSON.stringify(result.data))

    }
    catch (error) {
      toast.error('Error in Creation')
    }
  };

  return (
    <div className={styles.form}>

      <Box
        onSubmit={handleSubmit}
        component="form"
        autoComplete="off"
      >
        <h1
          style={{
            margin: "20px"
          }}
        >
          Create An <span className={styles.amazingText} >Amazing</span> Account
        </h1>
        <TextField
          sx={{
            width: '30%',
            margin: '10px',
            textAlign: 'left',
          }}
          id="standard-basic"
          label="Your Name"
          variant="standard"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextField
          sx={{
            width: '30%',
            margin: '10px',
            textAlign: 'left',
          }}
          id="standard-basic"
          label="Your Username"
          variant="standard"
          type="username"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <TextField
          sx={{
            width: '30%',
            margin: '10px',
            textAlign: 'left',
          }}
          id="standard-basic"
          label="Your Email"
          variant="standard"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          sx={{
            width: '30%',
            margin: '10px',
          }}
          id="standard-basic"
          label="Your Password"
          variant="standard"
          type='password'
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Button
          type='submit'
          sx={{
            marginTop: '10px',
            backgroundColor: 'skyBlue'
          }}
          variant="contained"
        >
          Create An Account
        </Button>

        <Link to='/login'>
          <Button>
            Login
          </Button>
        </Link>
      </Box>
      {/* <form onSubmit={handleSubmit}>
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
          required
        />
        <input
          type="email"
          name="email"
          placeholder='Email'
          value={form.email} // Update to use form.email
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder='Username'
          value={form.username} // Update to use form.username
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder='Password'
          value={form.password} // Update to use form.password
          onChange={handleChange}
          required
        />
        <button
          type='submit'>
          Create
        </button>
        <Link to='/login'>
          <button>
            Login
          </button>
        </Link>
      </form> */}
    </div>
  );
};

export default CreateAccount;
