import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <div class="homePageContact">
        <Link to="/">
            <i class="fa-solid fa-house"></i>
        </Link>
        <Link to="/">Homepage</Link>
        <span>
            <i class="fa-solid fa-angles-right"></i>
        </span>
        <a href="#" class="contact">Contact</a>
    </div>
  )
}

export default Breadcrumb