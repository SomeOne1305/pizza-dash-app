import React from 'react'
import './menu.css'
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
      icon:"fa-solid fa-bell",
      name:"Alerts"
    },
    {
      icon:"fa-solid fa-gear",
      name:"Settings"
    }
  ]
  return (
    <div className='menu'>
      <div className="logo button">
        <img src="" alt="" />
      </div>
      {
        tabs.map((item, index)=>{
          return(
            <div className="button">
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </div>
          )
        })
      }
    </div>
  )
}
