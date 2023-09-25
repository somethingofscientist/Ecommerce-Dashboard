import React, { useState, useEffect } from 'react';
import styles from './HomeScreen.module.css';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const columns = [
  {
    name: 'Product Name',
    selector: (row) => row.name,
  },
  {
    name: 'Product Price',
    selector: (row) => row.price,
  },
  {
    name: 'Company',
    selector: (row) => row.company,
  },
  {
    name: 'Category',
    selector: (row) => row.category,
  },
];

export const HomeScreen = () => {
  const [productData, setProductData] = useState([]);

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
      <h1>HomeScreen Here ...</h1>
      <DataTable
        columns={columns}
        data={productData}
        pagination
      />
    </div>
  );
};
