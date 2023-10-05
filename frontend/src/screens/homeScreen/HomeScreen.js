import React, { useState, useEffect } from 'react';
import styles from './HomeScreen.module.css';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { Link, unstable_HistoryRouter, useParams } from "react-router-dom";


export const HomeScreen = () => {
  // UseStates
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();


  // UseEffects
  useEffect(() => {
    getProducts();
    console.warn(params);
  }, []);


  // Functions
  const getProducts = async () => {
    try {
      const result = await axios.get(`http://localhost:9000/allProducts`);
      const products = result.data.products;
      setProductData(products);
      console.log('--> ', products);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleDelete = async (data) => {
    const { _id } = data;
    try {
      const result = await axios.delete(`http://localhost:9000/deleteProduct/${_id}`)
      if (result.status === 200) {
        toast.success('Item Deleted Successfully');
        getProducts();
      }
      else {
        toast.error('Item Not Deleted')
      }
    }
    catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#2c3844;',
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

  const nameSort = (a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  };

  const priceSort = (a, b) => a.price - b.price;

  const columns = [
    {
      name: 'Product Name',
      selector: (row) => row.name,
      sortable: true,
      sortFunction: nameSort,
    },
    {
      name: 'Product Price',
      selector: (row) => "₹ " + row.price,
      sortable: true,
      sortFunction: priceSort,
    },
    {
      name: 'Company',
      selector: (row) => row.company,
      sortable: true,
      sortFunction: nameSort,
    },
    {
      name: 'Category',
      selector: (row) => row.category,
      sortable: true,
      sortFunction: nameSort,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div
          className={styles.table_icon_holder}
        >
          <div
            className={styles.table_icon}
          >
            <Link to={'/update/' + row._id}>
              <FiEdit2 />
            </Link>
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

  return (
    <div className={styles.homeScreen}>
      <div className={styles.table}>
        {/* <DataTable
          title="Product List"
          customStyles={customStyles}
          columns={columns}
          data={productData}
          // defaultSortFieldId={1}
          highlightOnHover
          pointerOnHover
          pagination
        // fixedHeader
        // fixedHeaderScrollHeight="700px"
        /> */}

        {isLoading ? (
          <div>
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              alt="" />
          </div>
        ) : productData.length === 0 ? (
          <h1>Data Not Found ... </h1>
        ) : (
          // Render the data table if data is available
          <DataTable
            title="Product List"
            customStyles={customStyles}
            columns={columns}
            data={productData}
            highlightOnHover
            pointerOnHover
            pagination
          />
        )}
      </div>
    </div>
  );
};
