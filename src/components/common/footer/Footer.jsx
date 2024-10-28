import React from 'react'
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>SafeSmartTech</h1>
            <span>Empowering Engineering with Seamless Operations and Safety Solutions</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Company</h3>
            <ul>
              <li>About </li>
              <li>Careers</li>
              <li>News</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Products</h3>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Guides</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by ALX
        </p>
      </div>
    </>
  )
}

export default Footer
