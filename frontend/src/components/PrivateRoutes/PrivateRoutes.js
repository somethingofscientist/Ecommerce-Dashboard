import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';


const PrivateRoutes = () => {
    const auth = localStorage.getItem('user credentials');
    return (
        auth ?
            <Outlet /> :
            <Navigate to="/login" />
    )
}

export default PrivateRoutes