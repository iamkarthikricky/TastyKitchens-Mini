/* eslint-disable react/button-has-type */
import {Link, withRouter} from 'react-router-dom'

import {Component} from 'react'

import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class NavBar extends Component {
  state = {displayHamburger: false}

  onHamburger = () => {
    this.setState(preValue => ({displayHamburger: !preValue.displayHamburger}))
  }

  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {displayHamburger} = this.state
    return (
      <>
        <div className="nav-bar-mobile-view">
          <nav className="nav-bar">
            <div className="header-container">
              <Link to="/" className="nav-link">
                <img
                  src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1667564911/Tasty-Kitchens/VectorlandingImage_jjynow.png"
                  alt="website logo"
                  className="website-logo"
                />
                <h1 className="app-name">Tasty Kitches</h1>
              </Link>
              <button className="hamburger-btn" onClick={this.onHamburger}>
                <GiHamburgerMenu size="26" />
              </button>
            </div>
            {displayHamburger ? (
              <ul className="hamburger-ul-list">
                <Link to="/" className="nav-link">
                  <li className="list-name">Home</li>
                </Link>
                <Link to="/cart" className="nav-link">
                  <li className="list-name">Cart</li>
                </Link>
                <button className="logout-btn" onClick={this.onLogout}>
                  Logout
                </button>
                <button className="hamburger-btn" onClick={this.onHamburger}>
                  <AiFillCloseCircle size="26" />
                </button>
              </ul>
            ) : (
              ''
            )}
          </nav>
        </div>
        <div className="nav-bar-large-view">
          <nav className="nav-bar">
            <div className="header-container">
              <Link to="/" className="nav-link">
                <img
                  src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1667564911/Tasty-Kitchens/VectorlandingImage_jjynow.png"
                  alt="website logo"
                  className="website-logo"
                />
                <h1 className="app-name">Tasty Kitches</h1>
              </Link>
              <ul className="ul-list">
                <Link to="/" className="nav-link">
                  <li className="list-name">Home</li>
                </Link>
                <Link to="/cart" className="nav-link">
                  <li className="list-name">Cart</li>
                </Link>
                <button className="logout-btn" onClick={this.onLogout}>
                  Logout
                </button>
              </ul>
            </div>
          </nav>
        </div>
      </>
    )
  }
}

export default withRouter(NavBar)
