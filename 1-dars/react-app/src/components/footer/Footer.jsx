import React from 'react'
import icon from "../../assets/icons/icon.svg"
import "./footer.css"

function Footer() {
  return (
    <div className='footer'>

        <div className="footer-icon">
            <img src={icon} alt="" />
            <h1>Blog</h1>
        </div>

        <div className="biz-haqimizda">
            <h3>about us</h3>
            <hr />
            <p>Contacts</p>
            <p>Support</p>
            <p>Definitions</p>
            <p>Partners</p>
        </div>
        <div className="biz-haqimizda">
            <h3>Catalogue</h3>
            <hr />
            <p>Dance videos</p>
            <p>comedy</p>
            <p>Creative content</p>
            <p>Games and technology</p>
            <p>news</p>
        </div>
        <div className="biz-haqimizda">
            <h3>contact us</h3>

            <a href="#">+998 93 673 11 51</a>
        </div>

    </div>
  )
}

export default Footer