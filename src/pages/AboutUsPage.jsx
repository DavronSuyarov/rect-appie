import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div>
      {/*====== APPIE PAGE TITLE PART START ======*/}
      <div className='appie-page-title-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='appie-page-title-item'>
                <h3 className='title'>About Us</h3>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <Link to='/'>Home</Link>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      About Us
                    </li>
                  </ol>
                </nav>
                <div className='thumb'>
                  <img src='assets/images/signup-thumb.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== APPIE PAGE TITLE PART ENDS ======*/}
      {/*====== APPIE SERVICES PART START ======*/}
      <section
        className='appie-service-area appie-service-3-area pt-90 pb-100'
        id='service'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='appie-section-title text-center'>
                <h3 className='appie-title'>What you can do</h3>
                <p>
                  The full monty spiffing good time no biggie cack grub
                  fantastic.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div
                className='appie-single-service appie-single-services-3 text-center mt-30 wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='200ms'
              >
                <div className='icon'>
                  <img src='assets/images/icon/1.png' alt='' />
                </div>
                <h4 className='appie-title'>Easy to use</h4>
                <p>Mucker plastered bugger all mate morish are.</p>
                <a href='#'>
                  Read More <i className='fal fa-arrow-right' />
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='appie-single-service appie-single-services-3 text-center mt-30 item-2 wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='400ms'
              >
                <div className='icon'>
                  <img src='assets/images/icon/2.png' alt='' />
                </div>
                <h4 className='appie-title'>App Development</h4>
                <p>Mucker plastered bugger all mate morish are.</p>
                <a href='#'>
                  Read More <i className='fal fa-arrow-right' />
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='appie-single-service appie-single-services-3 text-center mt-30 item-3 wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='600ms'
              >
                <div className='icon'>
                  <img src='assets/images/icon/3.png' alt='' />
                </div>
                <h4 className='appie-title'>Fully Functional</h4>
                <p>Mucker plastered bugger all mate morish are.</p>
                <a href='#'>
                  Read More <i className='fal fa-arrow-right' />
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='appie-single-service appie-single-services-3 text-center mt-30 item-4 wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='800ms'
              >
                <div className='icon'>
                  <img src='assets/images/icon/4.png' alt='' />
                </div>
                <h4 className='appie-title'>Secured protocol</h4>
                <p>Mucker plastered bugger all mate morish are.</p>
                <a href='#'>
                  Read More <i className='fal fa-arrow-right' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE SERVICES PART ENDS ======*/}
      {/*====== APPIE FUN FACT PART START ======*/}
      <section className='appie-fun-fact-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div
                className='appie-fun-fact-box wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='400ms'
              >
                <div className='row r'>
                  <div className='col-lg-6'>
                    <div className='appie-fun-fact-content'>
                      <h3 className='title'>
                        Get started with Appie Template.
                      </h3>
                      <p>
                        The app provides design and digital marketing, applied
                        arts can include industrial design
                      </p>
                      <div className='row'>
                        <div className='col-sm-4'>
                          <div className='appie-fun-fact-item'>
                            <h4 className='title'>700k</h4>
                            <span>App Downloads</span>
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='appie-fun-fact-item'>
                            <h4 className='title'>476+</h4>
                            <span>Average Review</span>
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='appie-fun-fact-item'>
                            <h4 className='title'>30M</h4>
                            <span>Active Users</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='appie-fun-fact-play'>
                      <a
                        className='appie-video-popup'
                        href='https://www.youtube.com/watch?v=EE7NqzhMDms'
                      >
                        <i className='fas fa-play' />
                      </a>
                      <img src='assets/images/fun-fact-thumb.png' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE FUN FACT PART ENDS ======*/}
      {/*====== APPIE HOW IT WORK PART ENDS ======*/}
      <div className='appie-how-it-work-area pt-100 pb-90'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='how-it-work-thumb text-center'>
                <img src='assets/images/how-it-work-thumb.png' alt='' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='appie-how-it-work-content'>
                <h2 className='title'>How It works</h2>
                <p>
                  The little rotter harry butty lurgy spend a peny spiffing
                  skive off golly gosh baking cakes.
                </p>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='how-it-work-box'>
                      <span>1</span>
                      <h5 className='title'>
                        Download <br /> the app
                      </h5>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='how-it-work-box'>
                      <span>2</span>
                      <h5 className='title'>
                        Create a <br /> free account
                      </h5>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='how-it-work-box'>
                      <span>3</span>
                      <h5 className='title'>
                        Sync across <br /> All devices
                      </h5>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='how-it-work-box'>
                      <span>4</span>
                      <h5 className='title'>
                        Monthly &amp; <br /> weekly reports
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== APPIE HOW IT WORK PART ENDS ======*/}
      {/*====== APPIE TESTIMONIAL PART ENDS ======*/}
      <div className='appie-testimonial-about-area pb-45'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5'>
              <div className='appie-section-title text-center'>
                <h3 className='appie-title'>What clients say about us</h3>
                <p>The app provides design and digital marketing.</p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='testimonial-about-slider-active'>
                <div className='testimonial-box'>
                  <div className='icon'>
                    <i className='fas fa-quote-left' />
                  </div>
                  <div className='ratings-icon'>
                    <ul>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                    </ul>
                  </div>
                  <p>
                    Twit some dodgy chav he legged it crikey blatant starkers
                    pukka show off show off pick your nose and blow off morish
                    bum bag boot quaint, Oxford off his nut I bugger up the
                    kyver brilliant bits and bobs haggle buggered.
                  </p>
                </div>
                <div className='testimonial-box'>
                  <div className='icon'>
                    <i className='fas fa-quote-left' />
                  </div>
                  <div className='ratings-icon'>
                    <ul>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                    </ul>
                  </div>
                  <p>
                    Twit some dodgy chav he legged it crikey blatant starkers
                    pukka show off show off pick your nose and blow off morish
                    bum bag boot quaint, Oxford off his nut I bugger up the
                    kyver brilliant bits and bobs haggle buggered.
                  </p>
                </div>
                <div className='testimonial-box'>
                  <div className='icon'>
                    <i className='fas fa-quote-left' />
                  </div>
                  <div className='ratings-icon'>
                    <ul>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                    </ul>
                  </div>
                  <p>
                    Twit some dodgy chav he legged it crikey blatant starkers
                    pukka show off show off pick your nose and blow off morish
                    bum bag boot quaint, Oxford off his nut I bugger up the
                    kyver brilliant bits and bobs haggle buggered.
                  </p>
                </div>
                <div className='testimonial-box'>
                  <div className='icon'>
                    <i className='fas fa-quote-left' />
                  </div>
                  <div className='ratings-icon'>
                    <ul>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                    </ul>
                  </div>
                  <p>
                    Twit some dodgy chav he legged it crikey blatant starkers
                    pukka show off show off pick your nose and blow off morish
                    bum bag boot quaint, Oxford off his nut I bugger up the
                    kyver brilliant bits and bobs haggle buggered.
                  </p>
                </div>
                <div className='testimonial-box'>
                  <div className='icon'>
                    <i className='fas fa-quote-left' />
                  </div>
                  <div className='ratings-icon'>
                    <ul>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                    </ul>
                  </div>
                  <p>
                    Twit some dodgy chav he legged it crikey blatant starkers
                    pukka show off show off pick your nose and blow off morish
                    bum bag boot quaint, Oxford off his nut I bugger up the
                    kyver brilliant bits and bobs haggle buggered.
                  </p>
                </div>
                <div className='testimonial-box'>
                  <div className='icon'>
                    <i className='fas fa-quote-left' />
                  </div>
                  <div className='ratings-icon'>
                    <ul>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                      <li>
                        <i className='fas fa-star' />
                      </li>
                    </ul>
                  </div>
                  <p>
                    Twit some dodgy chav he legged it crikey blatant starkers
                    pukka show off show off pick your nose and blow off morish
                    bum bag boot quaint, Oxford off his nut I bugger up the
                    kyver brilliant bits and bobs haggle buggered.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-8 col-sm-10'>
              <div className='testimonial-box-about-slider-small-active'>
                <div className='item'>
                  <div className='thumb'>
                    <img src='assets/images/testimonial-user-1.png' alt='' />
                  </div>
                  <div className='content text-center'>
                    <h5 className='title'>Bodrum Salvador</h5>
                    <span>Product Designer</span>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <img src='assets/images/testimonial-user-1.png' alt='' />
                  </div>
                  <div className='content text-center'>
                    <h5 className='title'>Bodrum Salvador</h5>
                    <span>Product Designer</span>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <img src='assets/images/testimonial-user-1.png' alt='' />
                  </div>
                  <div className='content text-center'>
                    <h5 className='title'>Bodrum Salvador</h5>
                    <span>Product Designer</span>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <img src='assets/images/testimonial-user-1.png' alt='' />
                  </div>
                  <div className='content text-center'>
                    <h5 className='title'>Bodrum Salvador</h5>
                    <span>Product Designer</span>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <img src='assets/images/testimonial-user-1.png' alt='' />
                  </div>
                  <div className='content text-center'>
                    <h5 className='title'>Bodrum Salvador</h5>
                    <span>Product Designer</span>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <img src='assets/images/testimonial-user-1.png' alt='' />
                  </div>
                  <div className='content text-center'>
                    <h5 className='title'>Bodrum Salvador</h5>
                    <span>Product Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== APPIE TESTIMONIAL PART ENDS ======*/}
      {/*====== APPIE SPONSER PART ENDS ======*/}
      <div className='appie-signup-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='appie-signup-box'>
                <span>No credit card required</span>
                <h3 className='title'>Get Started.</h3>
                <form action='#'>
                  <div className='input-box'>
                    <input type='text' placeholder='Enter your name' />
                  </div>
                  <div className='input-box'>
                    <input type='email' placeholder='Enter your email' />
                  </div>
                  <div className='input-box'>
                    <button type='submit'>Sign Up</button>
                  </div>
                  <div className='appie_checkbox_common checkbox_style2'>
                    <div>
                      <input type='checkbox' name='checkbox2' id='checkbox4' />
                      <label htmlFor='checkbox4'>
                        <span />
                        By signing up you agree to our{' '}
                        <a href='#'>Terms &amp; Conditions.</a>
                      </label>
                    </div>
                  </div>
                </form>
                <div className='thumb'>
                  <img src='assets/images/signup-thumb.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
