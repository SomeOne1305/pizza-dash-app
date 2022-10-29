import React from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Menu from './Components/Menu/Menu'
import Main from './Components/Main/Main'
export default function App() {
  return (
    <div className='app'>
      <Menu/>
      <Cart/>
      <Main/>
    </div>
  )
}