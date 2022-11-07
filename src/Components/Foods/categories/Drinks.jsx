import React from 'react'
import axios from 'axios'
import drinkStyle from "../food.module.css"

export default function Drinks() {
    const [drink, setDrink] = React.useState([])
    React.useEffect(()=>{
        async function drinkData() {
            let data = await axios.get('http://localhost:3001/bar')
            setDrink(data.data)
        }
        drinkData()
    })
  return (
    <div className={drinkStyle.Block}>
        {
            drink.map((item)=>{
                return(
                    <div className={drinkStyle.productCard}>
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
