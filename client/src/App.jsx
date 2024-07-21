import React from 'react'
import Home from './home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Wantbooks from './wantbook/wants.jsx'
import Signup from './component/Signup.jsx'
import { Toaster } from 'react-hot-toast'
import Buybook from './component/Buybook.jsx'
import Payment from './component/Payment.jsx'
import Contact from './wantbook/Contact.jsx'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/want' element={<Wantbooks/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/buy' element={<Buybook/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Toaster/>


    </>
  )
}

export default App
