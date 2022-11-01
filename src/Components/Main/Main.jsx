import React from 'react'
import './main.css'
import axios from "axios";
import Home from './Home/Home';
import Load from '../../Test/Load';
export default function Main() {
  return (
  <div className='Main'>
    <Home/>
    <Load/>
  </div>
  )
}
