import React from 'react'
import {Link,NavLink } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const count = cartItems.reduce((s,it) => s + (it.quantity || 0), 0);
    const logo = 'https://assets-persist.lovart.ai/agent_images/4a7d0e91-87d9-45e3-a10e-7b96183b87de.jpg'
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
  <div className="container-fluid" style={{backgroundColor:'#f8edd8ff',height:'12vh',gap:'450px'}}>
    <Link className="navbar-brand" href="#">
        <img  src={logo} alt='' className='image-fluid' width='100'height='80px' style={{borderRadius:'6px'}}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" style={{fontSize:'20px',fontWeight:'500',gap:'60px', marginLeft:'256px'}}>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/product">Product</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to={"/cart"} className="navlink " href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></NavLink>
{count > 0 && (
  <span className='badge bg-danger rounded-pill position-absolute' style={{marginLeft:"-8px", marginTop:"-8px"}} >
    {count}
    </span>
)}
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
