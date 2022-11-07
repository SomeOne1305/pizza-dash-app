import React from 'react'
import axios from 'axios'
import saladStyle from "../food.module.css"

export default function Pizza() {
    const [salad, setSalad] = React.useState([])
    React.useEffect(()=>{
        async function saladData() {
            let data = await axios.get('http://localhost:3001/Salads')
            setSalad(data.data)
        }
        saladData()
    })
  return (
    <div className={saladStyle.Block}>
        {
            salad.map((item)=>{
                return(
                    <div className={saladStyle.productCard}>
                    <img src={item.Img} alt="" />
                    <span>{item.Name}</span>
                    <span>{item.price}</span>
                  </div>
                )
            })
        }
    </div>
  )
}
