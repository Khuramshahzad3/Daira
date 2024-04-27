import React from 'react'
import footer_logo from '../Assets/logo_image.jpg'
import instragram_icon from '../Assets/instagram.png'
import whatsapp_logo from '../Assets/whatsapp.png'
import pinterest_icon from '../Assets/pinterest.png'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img className='w-10' src={footer_logo} alt='' />
                <p>Ecommerce</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instragram_icon} alt='' />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_logo} alt='' />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt='' />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright@ 2024  All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
