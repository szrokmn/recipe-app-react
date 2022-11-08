import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './Navbar.style'

const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <a href=""><i>{"<Clarusway/>"}</i><span>Recipe</span></a>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/logout">Logout</Link>        
      </div>
    </Nav>
  )
}

export default Navbar