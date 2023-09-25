import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from './screens/homeScreen/HomeScreen';
import A404Screen from './screens/404Screen/A404Screen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import CreateAccount from './screens/Create/CreateAccount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import Header from './components/Header/Header';
import AddProduct from './screens/addProduct/AddProduct';
import UpdateProduct from './screens/updateProduct/UpdateProduct';

const App = () => {
  const auth = localStorage.getItem('user credentials');
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update' element={<UpdateProduct />} />
        </Route>


        <Route path='/login' element={<LoginScreen />} />
        <Route path='/create' element={<CreateAccount />} />
        <Route path='*' element={<A404Screen />} />
      </Routes>




      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App