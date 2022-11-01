import React from 'react'
import './App.css'
import Menu from './Components/Menu/Menu'
import Main from './Components/Main/Main'
export default function App() {
  return (
    <div className='app'>
      <Menu/>
      <Main/>
      {/* <Cart/> */}
    </div>
  )
}