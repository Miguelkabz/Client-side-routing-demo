import React from 'react'
import '../css/navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/about">About Us</NavLink>  
                </li>
                <li>
                    <NavLink exact to="/contact">Conatct Us</NavLink>
                </li>
                <li>
                    <NavLink exact to="/blog">Bloog</NavLink>
                </li>
                <li>
                    <NavLink exact to="/counterattack">Counterattack</NavLink>
                </li>
                <li>
                    <NavLink exact to="/todoList">ToDo List</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar