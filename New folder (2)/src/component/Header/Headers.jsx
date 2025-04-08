import React from 'react'
import "./Headers.css"
const Headers = () => {
  return (
    <header id="header">
        <p>Welcome!</p>
        <ul id="navbar">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </header>
  )
}

export default Headers