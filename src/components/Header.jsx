import React from 'react'
import LogoType from '../assets/images/silicon-logo.svg'
import LogoTypeDark from '../assets/images/siliconlogodark.svg'

const Header = () => {
  return (
    <header>
        <div className="container">

            <a id="logo" className="darkhide-imgs" href="VGindex.html"><img src={LogoType} /></a>
            <a id="logo" className="dark-display" href="VGindex.html"><img src={LogoTypeDark} /></a>

            <nav id="main-menu" className="navbar">
                <a className="nav-link" href="#">Features</a>
            </nav>

            <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                <span className="label dark-span">Dark mode</span>
                <label for="darkmode-switch" className="toggle-switch">
                    <input id="darkmode-switch" type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>

            <a id="sign-in" href="#" className="btn-primary">
                <i className="fa-regular fa-user"></i>
                <span>Sign In / Up</span>
            </a>

            <button className="btn-mobile">
                <i className="fa-solid fa-bars"></i>
            </button>

        </div>
    </header>
  )
}

export default Header