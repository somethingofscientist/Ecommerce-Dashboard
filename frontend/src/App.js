import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from './screens/homeScreen/HomeScreen';
import A404Screen from './screens/404Screen/A404Screen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import CreateAccount from './screens/Create/CreateAccount';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/create' element={<CreateAccount />} />
        <Route path='*' element={<A404Screen />} />
      </Routes>
    </>
  )
}

export default App