import React from 'react'
import logo_image from "../Assets/logo_image.jpg";
import cart_icon from "../Assets/cart.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div>
        <p>Logo</p>
        <img src={logo_image} alt="" className='w-10' />
      </div>
      <ul>
        <li>
            <Link to= "/">Home</Link>
        </li>
        <li>
            <Link to= "/shoe">Shoe</Link>
        </li>
        <li>
            <Link to= "/clothes">Clothes</Link>
        </li>
      </ul>
      <div>
        <img src={cart_icon} alt="" />
      </div>
    </div>
  )
}

export default Navbar
