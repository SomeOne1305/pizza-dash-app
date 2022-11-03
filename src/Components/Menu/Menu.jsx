import React from 'react'
import './menu.css'
import logo from "./images/logo.svg"


export default function Menu() {
  const tabs = [
    {
      icon:"fa fa-home",
      name:"Home"
    },
    {
      icon:"fa fa-grid-2",
      name:"table"
    },
    {
      icon:"fa-solid fa-bell-concierge",
      name:"Menu"
    },
    {
      icon:"fa-solid fa-cart-shopping",
      name:"Order"
    },
    {
      icon:"fa-solid fa-clock",
      name:"history"
    },
    {
      icon:"fas fa-chart-pie-simple",
      name:"Report"
    },
    {
      icon:"fa-solid fa-bell",
      name:"Alerts"
    },
    {
      icon:"fa-solid fa-gear",
      name:"Settings"
    }
  ]
  const [active, setActive] = React.useState(tabs[0].name)
    return (
    <div className='menu'>
      <div className="logo button">
        <img src={logo} />
        <span id="logo">Foods</span>
      </div>
      {
        tabs.map((item, index)=>{
          return(
            <div key={item.name} className={item.name === active ? "button selected": "button"} onClick={()=> setActive(item.name)}>
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </div>
          )
        })
      }
    </div>
  )
}
