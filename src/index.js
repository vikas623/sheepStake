import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Whitepaper from './Whitepaper'
import ToS from './ToS'
import Login from './Login'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/whitepaper' element={<Whitepaper />} />
        <Route exact path='/tos' element={<ToS />} />
        <Route path='/dashboard' element={<App />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)