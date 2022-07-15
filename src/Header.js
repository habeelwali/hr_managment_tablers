import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className='container' >
          
          <nav className='navbar navbar-light bg-dark  '>
            <div className='d-flex justify-content-between '>
            <Link className='nav-link active fw-bold' to="/">List</Link> 
            <Link className='nav-link active fw-bold' to="/adduser">Add User</Link>
            </div>
          </nav>
        </div>
      );
}

export default Header