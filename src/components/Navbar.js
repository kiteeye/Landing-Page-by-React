import { Link } from "react-router-dom"
import "./Navbar.css"

import React from 'react'

const Navbar = () => {

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="Header">
    <div className="mini-area">
    <p>Date: {currentDate}</p>
    <p1>Printed by :- Mr. Arun Gavaskar</p1>
    <p2>Page no : 1</p2>
    </div>

    <Link to="/" className="Logo">B. JOURNALIST</Link>
    <ul className="nav-menu">
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/project">Project</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>

      <li>
      <Link to="/batches">Batches</Link>
    </li>
    </ul>
    </div>
  )
}

export default Navbar