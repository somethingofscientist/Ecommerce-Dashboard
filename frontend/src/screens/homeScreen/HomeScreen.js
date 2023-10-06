import React, { useState, useEffect } from 'react';
import styles from './HomeScreen.module.css';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { Link, useParams } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';

export const HomeScreen = () => {
  const backend_url = process.env.REACT_APP_BACKEND_URL
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
      const result = await axios.get(`${backend_url}/allProducts`);
      // const products = result.data.products;
      const products = result.data.products.map((product, index) => ({
        ...product,
        id: index,
      }));
      setProductData(products);
      console.log('product ->', products);
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

  const columns = [
    {
      field: 'id',
      headerName: 'S.No.',
      width: 100
    },
    // {
    //   field: '_id',
    //   headerName: 'ID',
    //   width: 250
    // },
    {
      field: 'name',
      headerName: 'Name',
      width: 250
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 100
    },
    {
      field: 'company',
      headerName: 'Company',
      width: 200
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 300
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100
    },
  ];

  // const columns = [
  //   {
  //     name: 'Product Name',
  //     selector: (row) => row.name,
  //     sortable: true,
  //     sortFunction: nameSort,
  //   },
  //   {
  //     name: 'Product Price',
  //     selector: (row) => "₹ " + row.price,
  //     sortable: true,
  //     sortFunction: priceSort,
  //   },
  //   {
  //     name: 'Company',
  //     selector: (row) => row.company,
  //     sortable: true,
  //     sortFunction: nameSort,
  //   },
  //   {
  //     name: 'Category',
  //     selector: (row) => row.category,
  //     sortable: true,
  //     sortFunction: nameSort,
  //   },
  //   {
  //     name: 'Actions',
  //     cell: (row) => (
  //       <div
  //         className={styles.table_icon_holder}
  //       >
  //         <div
  //           className={styles.table_icon}
  //         >
  //           <Link to={'/update/' + row._id}>
  //             <FiEdit2 />
  //           </Link>
  //         </div>
  //         <div
  //           className={styles.table_icon}
  //           onClick={() => handleDelete(row)}>
  //           <AiFillDelete />
  //         </div>
  //       </div>
  //     ),
  //   },
  // ];
  // const customStyles = {
  //   headRow: {
  //     style: {
  //       backgroundColor: '#2c3844;',
  //       color: 'white'
  //     },
  //   },
  //   headCells: {
  //     style: {
  //       fontSize: '16px',
  //       fontWeight: 'bold',
  //     },
  //   },
  // };
  // const nameSort = (a, b) => {
  //   const nameA = a.name.toLowerCase();
  //   const nameB = b.name.toLowerCase();
  //   if (nameA < nameB) return -1;
  //   if (nameA > nameB) return 1;
  //   return 0;
  // };
  // const priceSort = (a, b) => a.price - b.price;


  return (
    // MUI DATA GRID --- MUI -> X
    <>
      <div style={{
        height: 'max-content',
        width: '70%',
        margin: '100px auto',

      }}>
        {isLoading ? (
          <div>
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              alt="" />
          </div>
        ) : productData.length === 0 ? (
          <h3>Data Not Found ... </h3>
        ) : (
          <DataGrid
            rows={productData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 20, 30]}
          // checkboxSelection
          />
        )
        }
      </div>
    </>


    // REACT DATA TABLE COMPONENT --

    // <div className={styles.homeScreen}>
    //   <div className={styles.table}>
    //     {isLoading ? (
    //       <div>
    //         <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
    //           alt="" />
    //       </div>
    //     ) : productData.length === 0 ? (
    //       <h1>Data Not Found ... </h1>
    //     ) : (
    //       <DataTable
    //         title="Product List"
    //         customStyles={customStyles}
    //         columns={columns}
    //         data={productData}
    //         highlightOnHover
    //         pointerOnHover
    //         pagination
    //       />
    //     )}
    //   </div>
    // </div>
  );
};
