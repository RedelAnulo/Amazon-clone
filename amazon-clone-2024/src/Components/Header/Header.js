import React from 'react'
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

function Header() {
  return (
    <div>
      <section>
      <section>
        <div>
            {/* Logo */}
            <a href=''>
                <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'alt='Amazon Logo'/>
            </a>
            {/* Delivery */}
            <span>
                {/* Icon */}
                <SlLocationPin/>
            </span>
            <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
            </div>
       </div>
        <div>
            {/* Search */}
            <select name='' id=''>
              <option value=''>All</option>
            </select>
            <input type='text' name='' id='' placeholder='Search Product'/>
            {/* Icon */}
            <BsSearch/>
        </div>
        {/* right side link */}
        <div>


          <div>
            <img src='https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg' alt='Flag'/>
              <select>
                <option value=''>EN</option>
              </select>
          </div>
          {/* Three components */}
          <a href=''>
            <div>
              <p>Sign In</p>
              <span>Accounts & Lists</span>
            </div>
          </a>
          {/* Orders */}
          <a>
            <p>returns</p>
            <span> & Orders</span>
          </a>
          {/* Cart */}
          <a to='/cart'>
            {/* icon */}
<BiCart/>
            <span>0</span>
          </a>


        </div>

      </section>

      </section>
    </div>
  )
}

export default Header
