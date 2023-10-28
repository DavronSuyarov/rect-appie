import React from 'react';
import { Link } from 'react-router-dom';
import navbarData from '../data/navbardata';

const Navbar = () => {
  return (
    <div>
      {/*====== OFFCANVAS MENU PART START ======*/}
      <div className='off_canvars_overlay'></div>
      <div className='offcanvas_menu'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <div className='offcanvas_menu_wrapper'>
                <div className='canvas_close'>
                  <a href='javascript:void(0)'>
                    <i className='fa fa-times' />
                  </a>
                </div>
                <div className='offcanvas-brand text-center mb-40'>
                  <img src='assets/images/logo.png' alt='' />
                </div>
                <div id='menu' className='text-left '>
                  <ul className='offcanvas_main_menu'>
                    <li className='menu-item-has-children active'>
                      <Link to='/'>Home</Link>
                      <ul className='sub-menu'>
                        <li>
                          <a href='index.html'>Home 1</a>
                        </li>
                        <li>
                          <a href='index-2.html'>Home 2</a>
                        </li>
                        <li>
                          <a href='index-3.html'>Home 3</a>
                        </li>
                        <li>
                          <a href='index-4.html'>Home 4</a>
                        </li>
                        <li>
                          <a href='index-5.html'>Home 5</a>
                        </li>
                        <li>
                          <a href='index-6.html'>Home 6</a>
                        </li>
                        <li>
                          <a href='index-7.html'>Home 7</a>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children active'>
                      <a href='#service'>Service</a>
                    </li>
                    <li className='menu-item-has-children active'>
                      <a href='#features'>Feature</a>
                    </li>
                    <li className='menu-item-has-children active'>
                      <a href='#testimonial'>Testimonial</a>
                    </li>
                    <li className='menu-item-has-children active'>
                      <a href='#'>News</a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='index.html'>news page</a>
                        </li>
                        <li>
                          <a href='index-2.html'>Single News</a>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children active'>
                      <a href='contact.html'>Contact</a>
                    </li>
                  </ul>
                </div>
                <div className='offcanvas-social'>
                  <ul className='text-center'>
                    <li>
                      <a href='https://quomodosoft.com/html/appie/assets/appie-demo/$'>
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a href='https://quomodosoft.com/html/appie/assets/appie-demo/$'>
                        <i className='fab fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='https://quomodosoft.com/html/appie/assets/appie-demo/$'>
                        <i className='fab fa-instagram' />
                      </a>
                    </li>
                    <li>
                      <a href='https://quomodosoft.com/html/appie/assets/appie-demo/$'>
                        <i className='fab fa-dribbble' />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='footer-widget-info'>
                  <ul>
                    <li>
                      <a href='#'>
                        <i className='fal fa-envelope' /> support@appie.com
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fal fa-phone' /> +(642) 342 762 44
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fal fa-map-marker-alt' /> 442 Belle Terre
                        St Floor 7, San Francisco, AV 4206
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== OFFCANVAS MENU PART ENDS ======*/}
      {/*====== PART START ======*/}
      <header className='appie-header-area appie-header-area-dark'>
        <div className='container'>
          <div className='header-nav-box'>
            <div className='row align-items-center'>
              <div className='col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1'>
                <div className='appie-logo-box'>
                  <a href='#'>
                    <img src='assets/images/logo-7.png' alt='' />
                  </a>
                </div>
              </div>
              <div className='col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2'>
                <div className='appie-header-main-menu'>
                  <ul>
                    {navbarData.map((item, index) => (
                      <li key={index}>
                        <Link to={item.path}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3'>
                <div className='appie-btn-box text-right'>
                  <a className='login-btn' href='#'>
                    <i className='fal fa-user' /> Login
                  </a>
                  <a className='main-btn ml-30' href='#'>
                    Get Started
                  </a>
                  <div className='toggle-btn ml-30 canvas_open d-lg-none d-block'>
                    <i className='fa fa-bars' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
