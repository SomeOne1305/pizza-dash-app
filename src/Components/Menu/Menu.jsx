import React from 'react'
import './menu.css'
export default function Menu() {
  const [active, setActive] = React.useState()
  const isTrue = React.useRef(0)
  const tabs = [
    {
      icon:"fa fa-home",
      name:"Home"
    },
    {
      icon:"fa fa-book",
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
      icon:"fa fa-chart",
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
  function isActive() {
    isTrue.setAttribute('is', true)
  }
    return (
    <div className='menu'>
      <div className="logo button">
        <img src="" alt="" />
      </div>
      {
        tabs.map((item, index)=>{
          return(
            <div key={index + 4 * index} className="button" ref={isTrue}>
              <i className={item.icon} style={{fontFamily:"FontAwesome"}}></i>
              <span>{item.name}</span>
            </div>
          )
        })
      }
    </div>
  )
}
