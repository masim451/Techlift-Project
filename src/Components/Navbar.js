import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <header className="header-section">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src="img/logo.png" alt="logo" />
                    </Link>
                </div>
                
                <div className="nav-menu">
                    <nav className="mainmenu mobile-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/">Food</Link></li>
                            <li><Link to="/track-exercise">Track Exercise</Link></li>
                            <li><Link to="/">Community</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </nav>
                    <Link to="/login" className="primary-btn login-btn">Login</Link>
                </div>
                <div id="mobile-menu-wrap"/>
            </div>
        </header>

        <section className="hero-section bgimg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-text">
                  <span>FITNESS ELEMENTS</span>
                  <h1>A Fresh approach to healthy life</h1>
                  <p>You can transform health through habit change.</p>
                  <Link to="/login" className="primary-btn">Start for Free</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Navbar