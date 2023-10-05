import React, { useEffect, useState } from 'react'
import styles from '../addProduct/AddProduct.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';


const UpdateProduct = () => {
    const params = useParams();

    const [form, setForm] = useState({
        name: "",
        price: "",
        company: "",
        category: "",
    })

    useEffect(() => {
        getSingleProduct();
    }, [])

    const getSingleProduct = async () => {
        let product = await axios.get(`http://localhost:9000/singleProduct/${params.id}`);
        setForm({
            name: product.data.result.name || "",
            price: product.data.result.price || "",
            company: product.data.result.company || "",
            category: product.data.result.category || "",
        });

    }

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
            const result = await axios.put(`http://localhost:9000/updateProduct/${params.id}`, {
                name,
                price,
                company,
                category
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (result.status === 200) {
                toast.success('Product created successfully')
                setForm({
                    name: "",
                    category: "",
                    price: "",
                    company: ""
                })
            }
            else {
                toast.error('Error in update creation')
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
                        Update Product
                    </button>
                </form>
            </div>
        </>
    )
}

export default UpdateProduct