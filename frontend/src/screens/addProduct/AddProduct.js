import React, { useState } from 'react'
import styles from './AddProduct.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const AddProduct = () => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        company: "",
        category: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, price, company, category } = form;
        try {
            const result = await axios.post("http://localhost:9000/addProduct", {
                name,
                price,
                company,
                category
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (result.status === 201) {
                toast.success('Product created successfully')
                setForm({
                    name: "",
                    category: "",
                    price: "",
                    company: ""
                })
            }
            else {
                toast.error('Error in product creation')
            }
        } catch (error) {
            toast.dismiss()
            toast.error(error.response.data.error);
        }
    }

    return (
        <>
            {/* <h1>Add Product</h1> */}
            <div className={styles.form}>
                <Box
                    onSubmit={handleSubmit}
                    component="form"
                    autoComplete="off"
                >
                    <TextField
                        sx={{
                            width: '50%',
                            margin: '10px',
                            textAlign: 'left',
                        }}
                        id="standard-basic"
                        label="Product Name"
                        variant="standard"
                        value={form.name}
                        name="name"
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        sx={{
                            width: '50%',
                            margin: '10px',
                        }}
                        id="standard-basic"
                        label="Company Name"
                        variant="standard"
                        name="company"
                        placeholder="Company Name"
                        value={form.company}
                        onChange={handleChange}
                    />
                    <TextField
                        sx={{
                            width: '50%',
                            margin: '10px',
                        }}
                        id="standard-basic"
                        label="Category Name"
                        variant="standard"
                        name="category"
                        placeholder="Category Name"
                        value={form.category}
                        onChange={handleChange}
                    />
                    <TextField
                        sx={{
                            width: '50%',
                            margin: '10px',
                        }}
                        id="standard-basic"
                        label="Product Price"
                        variant="standard"
                        name="price"
                        type='number'
                        placeholder="Price"
                        value={form.price}
                        onChange={handleChange}
                    />
                    <Button
                        type='submit'
                        sx={{
                            marginTop: '10px',
                            backgroundColor: 'skyBlue'
                        }}
                        variant="contained"
                    >
                        Add Product
                    </Button>
                </Box>
            </div>
        </>
    )
}

export default AddProduct