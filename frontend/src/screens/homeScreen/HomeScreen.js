import React, { useState, useEffect } from 'react';
import styles from './HomeScreen.module.css';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'



export const HomeScreen = () => {
  const [productData, setProductData] = useState([]);

  const handleEdit = () => { }
  const handleDelete = async (id) => {
    // try {
    //   await axios.delete(`http://localhost:9000/deleteProduct/${id}`)
    // }
    // catch (error) {
    //   console.error('Error deleting product:', error);
    // }
    console.log(id._id);
  }


  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#900a5c',
        color: 'white'
      },
    },
    headCells: {
      style: {
        fontSize: '16px', // Customize header cell font size
        fontWeight: 'bold', // Customize header cell font weight
      },
    },
  };

  const columns = [
    {
      name: 'Product Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Product Price',
      selector: (row) => "₹ " + row.price,
      sortable: true,
    },
    {
      name: 'Company',
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div
          className={styles.table_icon_holder}
        >
          <div
            className={styles.table_icon}
            onClick={() => handleEdit(row)}>
            <FiEdit2 />
          </div>
          <div
            className={styles.table_icon}
            onClick={() => handleDelete(row)}>
            <AiFillDelete />
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    axios.get('http://localhost:9000/allProducts')
      .then((response) => {
        const products = response.data.products;
        setProductData(products);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <div className={styles.homeScreen}>
      <div className={styles.table}>
        <DataTable
          title="Product List"
          customStyles={customStyles}
          columns={columns}
          data={productData}
          pagination
          highlightOnHover
          pointerOnHover
        // fixedHeader
        // fixedHeaderScrollHeight="700px"
        />
      </div>
    </div>
  );
};
