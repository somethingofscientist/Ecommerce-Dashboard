import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export const ForgotPassword = () => {
  const [form, setForm] = useState({
    email : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((obj) => ({
      ...obj,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    console.log('hi');
    e.preventDefault();
  }

  return (
    <>
      <h1>Forgot Password</h1>
      <Box
        onSubmit={handleSubmit}
        component="form"
        autoComplete="on"
        style={{
          marginTop: "100px",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
            flexDirection: 'column'
        }}
      >
        <TextField
          label='Enter Your Email'
          sx={{
            width: '50%',
            margin: '10px',
            textAlign: 'left',
          }}
          id="standard-basic"
          variant="standard"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <Button
          variant='standard'
          style={{
            backgroundColor: '#8d0079',
            color: 'white',
          }}
        >
          Submit Email
        </Button>
      </Box>
    </>
  )
}
