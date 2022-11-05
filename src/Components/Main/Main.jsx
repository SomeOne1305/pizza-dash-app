import React from 'react'
import './main.css'
import axios from "axios";
import Home from './Home/Home';
import Load from '../../Test/Load';
import Food from '../Foods/Food';
export default function Main() {
  return (
  <div className='Main'>
    <Food/>
  </div>
  )
}
