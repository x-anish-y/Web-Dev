import React from 'react'

const navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logotext}</div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
    </div>
  )
}

export default navbar
