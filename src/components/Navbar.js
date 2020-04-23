import React, { Component } from 'react'
import Keith_Njagi_logo_1bluered from '../static/Keith_Njagi_logo_1bluered.png'
class Navbar extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render () {

    return(
      <div className="navigation">
        <nav id="myNavMenu" className="nav-overlay container">
          <div className="row align-items-center justify-content-between d-flex mb-4">
            <div className='col-1'>
              <a href="/"><img className="logo-img" attr="icon" src={Keith_Njagi_logo_1bluered} alt="" /></a>
            </div>
            <div className='col-lg-4'>
              <ul className="nav-menu ">
                <li><a className="nav-item" href="/company" >Company</a></li>
                <li><a className="nav-item" href="/blog" >News</a></li>
                <li><a className="nav-item" href="/help">Help</a></li>
                <li><a className="nav-item" href="/resources">Resources</a></li>
              </ul>
            </div>
            <div className='col-lg-4 col-md-7 col-sm-6'>
              <ul></ul>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-5'>
              <ul className="nav-menu ">
                <li><a className="nav-item" href="/login">login</a></li>
                <li><a className="nav-item" href="/signup">Sign up</a></li>
                <li><span className='nav-menu-span' onClick={this.toggleNav}>&#9776;</span></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}


export default Navbar