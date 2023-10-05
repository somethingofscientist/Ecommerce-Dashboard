import React, { useState } from 'react'
import styles from './AddProduct.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';


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
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={form.company}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category Name"
                        value={form.category}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={form.price}
                        onChange={handleChange}
                    />

                    <button
                        type='submit'
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddProduct