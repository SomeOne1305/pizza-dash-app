import React from 'react'
import axios from 'axios'
import pizzaStyle from "../food.module.css"

export default function Pizza() {
    const [pizza, setPizza] = React.useState([])
    React.useEffect(()=>{
        async function pizzaData() {
            let data = await axios.get('http://localhost:3001/pizza')
            setPizza(data.data)
        }
        pizzaData()
    })
  return (
    <div className={pizzaStyle.Block}>
        {
            pizza.map((item)=>{
                return(
                    <div className={pizzaStyle.productCard}>
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
