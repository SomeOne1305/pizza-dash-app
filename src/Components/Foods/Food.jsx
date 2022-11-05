import React, { useEffect } from 'react'
import foods from "./food.module.css"
import menuStyle from '../Menu/menu.module.css'
import axios from 'axios'

export default function Food() {
    const productNav = [
        {
            prodIco:"https://cdn-icons-png.flaticon.com/512/1404/1404945.png",
            prodSectName:"Pizzas"
        },
        {
            prodIco:"https://cdn-icons-png.flaticon.com/512/1057/1057510.png",
            prodSectName:"Salads"
        },
        {
            prodIco:"https://cdn-icons-png.flaticon.com/512/390/390166.png",
            prodSectName:"Drinks"
        }
    ]
    const [active, setActive] = React.useState(productNav[0].prodSectName)
    const dataAddress = ["https://pizza-dash-app-default-rtdb.firebaseio.com/pizza", "", ""]
    const [myData, setMyData] = React.useState([])
    useEffect(()=>{
        async function getData(){
            let data = await axios.get(dataAddress[0])
            setMyData(data.data)
        }
        getData()
    })
  
    console.log(myData);
    return (
    <div className={foods.foods}>
        <nav>
            <div className={foods.searchBlock}>
                <div className={foods.search}>
                    <input type="text" placeholder='Search product'/>
                    <i className="fa-solid fa-search"></i>
                </div>
                <span className={foods.howManyItemSelected}>0 item in your shopping cart</span>
            </div>
        <ul className={foods.topNav}>
            {
                productNav.map(item=>{
                    return(
                      <li key={item.prodSectName} className={item.prodSectName === active ? menuStyle.selected : ""} onClick={()=>setActive(item.prodSectName)}>
                        <img src={item.prodIco}/>
                        <span>{item.prodSectName}</span>
                      </li>  
                    )
                })
            }
        </ul>
        </nav>
        <div className="productBlock">
            {

            }
        </div>
    </div>
  )
}
