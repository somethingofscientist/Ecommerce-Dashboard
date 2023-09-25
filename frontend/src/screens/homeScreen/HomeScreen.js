import React, { useState, useEffect } from 'react';
import styles from './HomeScreen.module.css';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'



export const HomeScreen = () => {
  const [productData, setProductData] = useState([]);

  const handleEdit = () => { }
  const handleDelete = () => { }

  const columns = [
    {
      name: 'Product Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Product Price',
      selector: (row) => row.price,
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
      {/* <h1>HomeScreen Here ...</h1> */}
      <div className={styles.table}>
        <DataTable
          title="Product List"
          columns={columns}
          data={productData}
          pagination

          // selectableRows
          // dense
          // customStyles={customStyles}

          highlightOnHover
          pointerOnHover
          fixedHeader
          fixedHeaderScrollHeight="1000px"
        />
      </div>
    </div>
  );
};
