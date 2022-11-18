import React from 'react'
import { Link, } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className="Navbar">
            <Link to="/">
                <h1>LAB - WikiCountries</h1>
            </Link>
        </nav>
    </div>
  )
}

export default Navbar