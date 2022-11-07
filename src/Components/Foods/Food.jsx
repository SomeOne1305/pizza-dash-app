import React from 'react'
import foods from "./food.module.css"
import menuStyle from '../Menu/menu.module.css'
import Pizza from './categories/Pizza'
import Drinks from './categories/Drinks'
import Salads from './categories/Salads'
import { Routes, Route, Link } from 'react-router-dom'


export default function Food() {
    const productNav = [
        {
            prodIco: "https://cdn-icons-png.flaticon.com/512/1404/1404945.png",
            prodSectName: "Pizzas",
            link:'/pizza'
        },
        {
            prodIco: "https://cdn-icons-png.flaticon.com/512/1057/1057510.png",
            prodSectName: "Salads",
            link:"/salad"
        },
        {
            prodIco: "https://cdn-icons-png.flaticon.com/512/390/390166.png",
            prodSectName: "Drinks",
            link:"/drink"
        }
    ]

    const [active, setActive] = React.useState(productNav[0].prodSectName)
    // const dataAddress = ["http://localhost:3001/pizza", "http://localhost:3001/Salads", "http://localhost:3001/bar"]
    // const [myData, setMyData] = React.useState([])
    // let ind = productNav.findIndex(object => {
    //     return object.prodSectName === active
    // })
    // useEffect(() => {
    //     async function getData() {
    //         let data = await axios.get(dataAddress[ind])
    //         setMyData(data.data)
    //     }
    //     getData()
    // })
    return (
        <div className={foods.foods}>
            <nav>
                <div className={foods.searchBlock}>
                    <div className={foods.search}>
                        <input type="text" placeholder='Search product' />
                        <i className="fa-solid fa-search"></i>
                    </div>
                    <span className={foods.howManyItemSelected}>0 item in your shopping cart</span>
                </div>
                <ul className={foods.topNav}>
                    {
                        productNav.map((item, index) => {
                            return (
                                <Link to={item.link}>
                                <li key={item.prodSectName} className={item.prodSectName === active ? menuStyle.selected : ""} onClick={() => setActive(item.prodSectName)}>
                                    <img src={item.prodIco} alt=""/>
                                    <span>{item.prodSectName}</span>
                                </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </nav> 
            {
                <Routes>
                    <Route path='/pizza' element={<Pizza/>}/>
                    <Route path='/salad' element={<Salads/>}/>
                    <Route path='/drink' element={<Drinks/>}/>

                    
                </Routes>
            }
        </div>
    )
}
