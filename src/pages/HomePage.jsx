import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/*====== APPIE HERO PART START ======*/}
      <section className='appie-hero-area appie-hero-area-dark'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='appie-hero-content'>
                <span>Welcome To Appie</span>
                <h1 className='appie-title'>
                  Manage it all, in this all new system.
                </h1>
                <p>
                  Hanky panky lavatory up the duff jolly good cack brolly is
                  chinwag zonked happy days sloshed.
                </p>
                <ul>
                  <li>
                    <a href='#'>
                      <i className='fab fa-apple' /> Download for iOS
                    </a>
                  </li>
                  <li>
                    <a className='item-2' href='#'>
                      <i className='fab fa-google-play' /> Download for Android
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='appie-hero-thumb'>
                <div
                  className='thumb wow animated fadeInUp'
                  data-wow-duration='2000ms'
                  data-wow-delay='200ms'
                >
                  <img src='assets/images/hero-thumb-1.png' alt='' />
                </div>
                <div
                  className='thumb-2 wow animated fadeInRight'
                  data-wow-duration='2000ms'
                  data-wow-delay='600ms'
                >
                  <img src='assets/images/hero-thumb-2.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hero-shape-1'>
          <img src='assets/images/shape/shape-2.png' alt='' />
        </div>
        <div className='hero-shape-2'>
          <img src='assets/images/shape/shape-3.png' alt='' />
        </div>
        <div className='hero-shape-3'>
          <img src='assets/images/shape/shape-4.png' alt='' />
        </div>
      </section>
      {/*====== APPIE HERO PART ENDS ======*/}
      {/*====== APPIE SERVICES PART START ======*/}
      <section
        className='appie-service-area appie-service-area-dark pt-90 pb-100'
        id='service'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='appie-section-title text-center'>
                <h3 className='appie-title'>
                  Designed with <br /> The applicant in mind.
                </h3>
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
                className='appie-single-service text-center mt-30 wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='200ms'
              >
                <div className='icon'>
                  <img src='assets/images/icon/1.png' alt='' />
                  <span>1</span>
                </div>
                <h4 className='appie-title'>Searching</h4>
                <p>Mucker plastered bugger all mate morish are.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='appie-single-service text-center mt-30 item-2 wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='400ms'
              >
                <div className='icon'>
                  <img src='assets/images/icon/2.png' alt='' />
                  <span>2</span>
                </div>
                <h4 className='appie-title'>Designing</h4>
                <p>Mucker plastered bugger all mate morish are.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='appie-single-service text-center mt-30 item-3 wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='600ms'
              >
                <div className='icon'>
                  <img src='assets/images/icon/3.png' alt='' />
                  <span>3</span>
                </div>
                <h4 className='appie-title'>Building</h4>
                <p>Mucker plastered bugger all mate morish are.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='appie-single-service text-center mt-30 item-4 wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='800ms'
              >
                <div className='icon'>
                  <img src='assets/images/icon/4.png' alt='' />
                  <span>4</span>
                </div>
                <h4 className='appie-title'>Suporting</h4>
                <p>Mucker plastered bugger all mate morish are.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE SERVICES PART ENDS ======*/}
      {/*====== APPIE FEATURES PART START ======*/}
      <section
        className='appie-features-area appie-features-area-dark pt-100'
        id='features'
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-3'>
              <div className='appie-features-tabs-btn'>
                <div
                  className='nav flex-column nav-pills'
                  id='v-pills-tab'
                  role='tablist'
                  aria-orientation='vertical'
                >
                  <a
                    className='nav-link active'
                    id='v-pills-home-tab'
                    data-toggle='pill'
                    href='#v-pills-home'
                    role='tab'
                    aria-controls='v-pills-home'
                    aria-selected='true'
                  >
                    <i className='fas fa-cog' /> Settings
                  </a>
                  <a
                    className='nav-link'
                    id='v-pills-profile-tab'
                    data-toggle='pill'
                    href='#v-pills-profile'
                    role='tab'
                    aria-controls='v-pills-profile'
                    aria-selected='false'
                  >
                    <i className='fas fa-exclamation-triangle' /> Report
                  </a>
                  <a
                    className='nav-link'
                    id='v-pills-messages-tab'
                    data-toggle='pill'
                    href='#v-pills-messages'
                    role='tab'
                    aria-controls='v-pills-messages'
                    aria-selected='false'
                  >
                    <i className='fas fa-bell' /> Saeety Notices
                  </a>
                  <a
                    className='nav-link'
                    id='v-pills-settings-tab'
                    data-toggle='pill'
                    href='#v-pills-settings'
                    role='tab'
                    aria-controls='v-pills-settings'
                    aria-selected='false'
                  >
                    <i className='fas fa-lock' /> App Lock
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-9'>
              <div className='tab-content' id='v-pills-tabContent'>
                <div
                  className='tab-pane fade show active'
                  id='v-pills-home'
                  role='tabpanel'
                  aria-labelledby='v-pills-home-tab'
                >
                  <div className='row align-items-center'>
                    <div className='col-lg-6'>
                      <div
                        className='appie-features-thumb text-center wow animated fadeInUp'
                        data-wow-duration='2000ms'
                        data-wow-delay='200ms'
                      >
                        <img src='assets/images/features-thumb-1.png' alt='' />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div
                        className='appie-features-content wow animated fadeInRight'
                        data-wow-duration='2000ms'
                        data-wow-delay='600ms'
                      >
                        <span>Custom Reacyions</span>
                        <h3 className='title'>
                          Let the <br /> Conversation flow
                        </h3>
                        <p>
                          Car boot absolutely bladdered posh burke the wireless
                          mush some dodg.
                        </p>
                        <a className='main-btn' href='#'>
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='v-pills-profile'
                  role='tabpanel'
                  aria-labelledby='v-pills-profile-tab'
                >
                  <div className='row align-items-center'>
                    <div className='col-lg-6'>
                      <div
                        className='appie-features-thumb text-center animated fadeInUp'
                        data-wow-duration='2000ms'
                        data-wow-delay='200ms'
                      >
                        <img src='assets/images/features-thumb-1.png' alt='' />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div
                        className='appie-features-content animated fadeInRight'
                        data-wow-duration='2000ms'
                        data-wow-delay='600ms'
                      >
                        <span>Custom Reacyions</span>
                        <h3 className='title'>
                          Let the <br /> Conversation flow
                        </h3>
                        <p>
                          Car boot absolutely bladdered posh burke the wireless
                          mush some dodg.
                        </p>
                        <a className='main-btn' href='#'>
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='v-pills-messages'
                  role='tabpanel'
                  aria-labelledby='v-pills-messages-tab'
                >
                  <div className='row align-items-center'>
                    <div className='col-lg-6'>
                      <div
                        className='appie-features-thumb text-center animated fadeInUp'
                        data-wow-duration='2000ms'
                        data-wow-delay='200ms'
                      >
                        <img src='assets/images/features-thumb-1.png' alt='' />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div
                        className='appie-features-content animated fadeInRight'
                        data-wow-duration='2000ms'
                        data-wow-delay='600ms'
                      >
                        <span>Custom Reacyions</span>
                        <h3 className='title'>
                          Let the <br /> Conversation flow
                        </h3>
                        <p>
                          Car boot absolutely bladdered posh burke the wireless
                          mush some dodg.
                        </p>
                        <a className='main-btn' href='#'>
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='v-pills-settings'
                  role='tabpanel'
                  aria-labelledby='v-pills-settings-tab'
                >
                  <div className='row align-items-center'>
                    <div className='col-lg-6'>
                      <div
                        className='appie-features-thumb text-center animated fadeInUp'
                        data-wow-duration='2000ms'
                        data-wow-delay='200ms'
                      >
                        <img src='assets/images/features-thumb-1.png' alt='' />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div
                        className='appie-features-content animated fadeInRight'
                        data-wow-duration='2000ms'
                        data-wow-delay='600ms'
                      >
                        <span>Custom Reacyions</span>
                        <h3 className='title'>
                          Let the <br /> Conversation flow
                        </h3>
                        <p>
                          Car boot absolutely bladdered posh burke the wireless
                          mush some dodg.
                        </p>
                        <a className='main-btn' href='#'>
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='features-shape-1'>
          <img src='assets/images/shape/shape-6.png' alt='' />
        </div>
        <div className='features-shape-2'>
          <img src='assets/images/shape/shape-7.png' alt='' />
        </div>
        <div className='features-shape-3'>
          <img src='assets/images/shape/shape-8.png' alt='' />
        </div>
      </section>
      {/*====== APPIE FEATURES PART ENDS ======*/}
      {/*====== APPIE TRAFFIC PART START ======*/}
      <section className='appie-traffic-area appie-traffic-area-dark pt-140 pb-180'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='appie-traffic-title'>
                <span>Traffic</span>
                <h3 className='title'>Stage reporting with 50k queries.</h3>
                <p>
                  He nicked it tickety boo harry the cras bargy chap mush
                  spiffing spend a penny the full monty burke butty.
                </p>
              </div>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='appie-traffic-service mb-30'>
                    <div className='icon'>
                      <i className='fal fa-check' />
                    </div>
                    <h5 className='title'>Carefully designed</h5>
                    <p>Mucker plastered bugger all mate morish are.</p>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='appie-traffic-service item-2 mb-30'>
                    <div className='icon'>
                      <i className='fal fa-check' />
                    </div>
                    <h5 className='title'>Choose a App</h5>
                    <p>Mucker plastered bugger all mate morish are.</p>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='appie-traffic-service item-3'>
                    <div className='icon'>
                      <i className='fal fa-check' />
                    </div>
                    <h5 className='title'>Seamless Sync</h5>
                    <p>Mucker plastered bugger all mate morish are.</p>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='appie-traffic-service item-4'>
                    <div className='icon'>
                      <i className='fal fa-check' />
                    </div>
                    <h5 className='title'>User Interactive</h5>
                    <p>Mucker plastered bugger all mate morish are.</p>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='traffic-btn mt-50'>
                    <a className='main-btn' href='#'>
                      Learn More <i className='fal fa-arrow-right' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='traffic-thumb '>
          <img
            className='wow animated fadeInRight'
            data-wow-duration='2000ms'
            data-wow-delay='200ms'
            src='assets/images/traffic-thumb.png'
            alt=''
          />
        </div>
      </section>
      {/*====== APPIE TRAFFIC PART ENDS ======*/}
      {/*====== APPIE TESTIMONIAL PART START ======*/}
      <section
        className='appie-testimonial-area pt-100 pb-160'
        id='testimonial'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='appie-testimonial-slider'>
                <div className='appie-testimonial-item text-center'>
                  <div className='author-info'>
                    <img src='assets/images/testimonial-user.png' alt='' />
                    <h5 className='title'>Jason Response</h5>
                    <span>April 14, 2022</span>
                  </div>
                  <div className='text'>
                    <p>
                      Why I say old chap that is spiffing lurgy Oxford cracking
                      goal bleeder, bog-standard Harry brilliant mush a blinding
                      shot starkers.
                    </p>
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
                </div>
                <div className='appie-testimonial-item text-center'>
                  <div className='author-info'>
                    <img src='assets/images/testimonial-user.png' alt='' />
                    <h5 className='title'>Jason Response</h5>
                    <span>April 14, 2022</span>
                  </div>
                  <div className='text'>
                    <p>
                      Why I say old chap that is spiffing lurgy Oxford cracking
                      goal bleeder, bog-standard Harry brilliant mush a blinding
                      shot starkers.
                    </p>
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
                </div>
                <div className='appie-testimonial-item text-center'>
                  <div className='author-info'>
                    <img src='assets/images/testimonial-user.png' alt='' />
                    <h5 className='title'>Jason Response</h5>
                    <span>April 14, 2022</span>
                  </div>
                  <div className='text'>
                    <p>
                      Why I say old chap that is spiffing lurgy Oxford cracking
                      goal bleeder, bog-standard Harry brilliant mush a blinding
                      shot starkers.
                    </p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE TESTIMONIAL PART ENDS ======*/}
      {/*====== APPIE TEAM PART START ======*/}
      <section className='appie-team-area appie-team-area-dark pt-90 pb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='appie-section-title text-center'>
                <h3 className='appie-title'>Meet our Team Members</h3>
                <p>Different layouts and styles for team sections.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div
                className='appie-team-item mt-30 wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='200ms'
              >
                <div className='thumb'>
                  <img src='assets/images/team-1.jpg' alt='' />
                  <ul>
                    <li>
                      <a href='#'>
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-pinterest-p' />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='content text-center'>
                  <h5 className='title'>Benjamin Evalent</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='appie-team-item mt-30 wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='400ms'
              >
                <div className='thumb'>
                  <img src='assets/images/team-2.jpg' alt='' />
                  <ul>
                    <li>
                      <a href='#'>
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-pinterest-p' />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='content text-center'>
                  <h5 className='title'>Benjamin Evalent</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='appie-team-item mt-30 wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='600ms'
              >
                <div className='thumb'>
                  <img src='assets/images/team-3.jpg' alt='' />
                  <ul>
                    <li>
                      <a href='#'>
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-pinterest-p' />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='content text-center'>
                  <h5 className='title'>Benjamin Evalent</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='appie-team-item mt-30 wow animated fadeInUp'
                data-wow-duration='2000ms'
                data-wow-delay='800ms'
              >
                <div className='thumb'>
                  <img src='assets/images/team-4.jpg' alt='' />
                  <ul>
                    <li>
                      <a href='#'>
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-pinterest-p' />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='content text-center'>
                  <h5 className='title'>Benjamin Evalent</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='team-btn text-center mt-50'>
                <a className='main-btn' href='#'>
                  {' '}
                  View all Members <i className='fal fa-arrow-right' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE TEAM PART ENDS ======*/}
      {/*====== APPIE PRICING PART START ======*/}
      <section className='appie-pricing-area appie-pricing-area-dark pt-90 pb-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='appie-section-title text-center'>
                <h3 className='appie-title'>Choose your plan</h3>
                <p>Different layouts and styles for team sections.</p>
              </div>
              <ul
                className='list-inline text-center switch-toggler-list'
                role='tablist'
                id='switch-toggle-tab'
              >
                <li className='month active'>
                  <a href='#'>Monthly</a>
                </li>
                <li>
                  {/* Rounded switch */}
                  <label className='switch on'>
                    <span className='slider round' />
                  </label>
                </li>
                <li className='year'>
                  <a href='#'>Annualy</a>
                </li>
              </ul>
              {/* /.list-inline */}
            </div>
          </div>
          <div className='tabed-content'>
            <div id='month'>
              <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6 wow animated fadeInLeft'>
                  <div className='pricing-one__single'>
                    <div className='pricig-heading'>
                      <h6>Fresh</h6>
                      <div className='price-range'>
                        <sup>$</sup> <span>04</span>
                        <p>/month</p>
                      </div>
                      <p>Get your 14 day free trial</p>
                    </div>
                    <div className='pricig-body'>
                      <ul>
                        <li>
                          <i className='fal fa-check' /> 60-day chat history
                        </li>
                        <li>
                          <i className='fal fa-check' /> 15 GB cloud storage
                        </li>
                      </ul>
                      <div className='pricing-btn mt-35'>
                        <a className='main-btn' href='#'>
                          Choose plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 wow animated fadeInUp'>
                  <div className='pricing-one__single center'>
                    <div className='pricig-heading'>
                      <h6>Sweet</h6>
                      <div className='price-range'>
                        <sup>$</sup> <span>16</span>
                        <p>/month</p>
                      </div>
                      <p>Billed $276 per website annually.</p>
                    </div>
                    <div className='pricig-body'>
                      <ul>
                        <li>
                          <i className='fal fa-check' /> 60-day chat history
                        </li>
                        <li>
                          <i className='fal fa-check' /> 50 GB cloud storage
                        </li>
                        <li>
                          <i className='fal fa-check' /> 24/7 Support
                        </li>
                      </ul>
                      <div className='pricing-btn mt-35'>
                        <a className='main-btn' href='#'>
                          Choose plan
                        </a>
                      </div>
                    </div>
                    <div className='pricing-rebon'>
                      <span>Most Popular</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 wow animated fadeInRight'>
                  <div className='pricing-one__single'>
                    <div className='pricig-heading'>
                      <h6>Juicy</h6>
                      <div className='price-range'>
                        <sup>$</sup> <span>27</span>
                        <p>/month</p>
                      </div>
                      <p>Billed $276 per website annually.</p>
                    </div>
                    <div className='pricig-body'>
                      <ul>
                        <li>
                          <i className='fal fa-check' /> 60-day chat history
                        </li>
                        <li>
                          <i className='fal fa-check' /> Data security
                        </li>
                        <li>
                          <i className='fal fa-check' /> 100 GB cloud storage
                        </li>
                        <li>
                          <i className='fal fa-check' /> 24/7 Support
                        </li>
                      </ul>
                      <div className='pricing-btn mt-35'>
                        <a className='main-btn' href='#'>
                          Choose plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /#month */}
            <div id='year'>
              <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6 wow animated fadeInLeft'>
                  <div className='pricing-one__single'>
                    <div className='pricig-heading'>
                      <h6>Fresh</h6>
                      <div className='price-range'>
                        <sup>$</sup> <span>32</span>
                        <p>/Yearly</p>
                      </div>
                      <p>Get your 14 day free trial</p>
                    </div>
                    <div className='pricig-body'>
                      <ul>
                        <li>
                          <i className='fal fa-check' /> 60-day chat history
                        </li>
                        <li>
                          <i className='fal fa-check' /> 15 GB cloud storage
                        </li>
                      </ul>
                      <div className='pricing-btn mt-35'>
                        <a className='main-btn' href='#'>
                          Choose plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 wow animated fadeInUp'>
                  <div className='pricing-one__single center'>
                    <div className='pricig-heading'>
                      <h6>Sweet</h6>
                      <div className='price-range'>
                        <sup>$</sup> <span>116</span>
                        <p>/Yearly</p>
                      </div>
                      <p>Billed $276 per website annually.</p>
                    </div>
                    <div className='pricig-body'>
                      <ul>
                        <li>
                          <i className='fal fa-check' /> 60-day chat history
                        </li>
                        <li>
                          <i className='fal fa-check' /> 50 GB cloud storage
                        </li>
                        <li>
                          <i className='fal fa-check' /> 24/7 Support
                        </li>
                      </ul>
                      <div className='pricing-btn mt-35'>
                        <a className='main-btn' href='#'>
                          Choose plan
                        </a>
                      </div>
                    </div>
                    <div className='pricing-rebon'>
                      <span>Most Popular</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 wow animated fadeInRight'>
                  <div className='pricing-one__single'>
                    <div className='pricig-heading'>
                      <h6>Juicy</h6>
                      <div className='price-range'>
                        <sup>$</sup> <span>227</span>
                        <p>/Yearly</p>
                      </div>
                      <p>Billed $276 per website annually.</p>
                    </div>
                    <div className='pricig-body'>
                      <ul>
                        <li>
                          <i className='fal fa-check' /> 60-day chat history
                        </li>
                        <li>
                          <i className='fal fa-check' /> Data security
                        </li>
                        <li>
                          <i className='fal fa-check' /> 100 GB cloud storage
                        </li>
                        <li>
                          <i className='fal fa-check' /> 24/7 Support
                        </li>
                      </ul>
                      <div className='pricing-btn mt-35'>
                        <a className='main-btn' href='#'>
                          Choose plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE PRICING PART ENDS ======*/}
      {/*====== APPIE FAQ PART START ======*/}
      <section className='appie-faq-area appie-faq-area-dark pb-95'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='appie-section-title text-center'>
                <h3 className='appie-title'>Frequently asked questions</h3>
                <p>Different layouts and styles for team sections.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='faq-accordion wow fadeInRight mt-30'
                data-wow-duration='1500ms'
              >
                <div
                  className='accrodion-grp wow fadeIn'
                  data-wow-duration='1500ms'
                  data-grp-name='faq-accrodion'
                >
                  <div className='accrodion active '>
                    <div className='accrodion-inner'>
                      <div className='accrodion-title'>
                        <h4>Where do I usually find FAQs in a page?</h4>
                      </div>
                      <div className='accrodion-content'>
                        <div className='inner'>
                          <p>
                            Naff Oxford vagabond in my flat chinwag blatant grub
                            tomfoolery that I bits and bobs up the duff cras
                            boot bevvy no biggie.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    {/* /.accrodion-inner */}
                  </div>
                  <div className='accrodion  '>
                    <div className='accrodion-inner'>
                      <div className='accrodion-title'>
                        <h4>Where do I usually find FAQs in a page?</h4>
                      </div>
                      <div className='accrodion-content'>
                        <div className='inner'>
                          <p>
                            Naff Oxford vagabond in my flat chinwag blatant grub
                            tomfoolery that I bits and bobs up the duff cras
                            boot bevvy no biggie.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    {/* /.accrodion-inner */}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div
                className='faq-accordion wow fadeInRight mt-30'
                data-wow-duration='1500ms'
              >
                <div
                  className='accrodion-grp wow fadeIn'
                  data-wow-duration='1500ms'
                  data-grp-name='faq-accrodion'
                >
                  <div className='accrodion '>
                    <div className='accrodion-inner'>
                      <div className='accrodion-title'>
                        <h4>Where do I usually find FAQs in a page?</h4>
                      </div>
                      <div className='accrodion-content'>
                        <div className='inner'>
                          <p>
                            Naff Oxford vagabond in my flat chinwag blatant grub
                            tomfoolery that I bits and bobs up the duff cras
                            boot bevvy no biggie.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    {/* /.accrodion-inner */}
                  </div>
                  <div className='accrodion  '>
                    <div className='accrodion-inner'>
                      <div className='accrodion-title'>
                        <h4>Where do I usually find FAQs in a page?</h4>
                      </div>
                      <div className='accrodion-content'>
                        <div className='inner'>
                          <p>
                            Naff Oxford vagabond in my flat chinwag blatant grub
                            tomfoolery that I bits and bobs up the duff cras
                            boot bevvy no biggie.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    {/* /.accrodion-inner */}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='faq-text text-center pt-40'>
                <p>
                  Can't find an answer?{' '}
                  <a href='mailto:demo@gmail.com'>Email us</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE FAQ PART ENDS ======*/}
      {/*====== APPIE BLOG PART START ======*/}
      <section className='appie-blog-area appie-blog-area-dark pt-90 pb-95'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='appie-section-title text-center'>
                <h3 className='appie-title'>Latest blog posts</h3>
                <p>Different layouts and styles for team sections.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div
                className='appie-blog-item mt-30 wow animated fadeInUp'
                data-wow-duration='3000ms'
                data-wow-delay='200ms'
              >
                <div className='thumb'>
                  <img src='assets/images/blog-1.jpg' alt='' />
                </div>
                <div className='content'>
                  <div className='blog-meta'>
                    <ul>
                      <li>March 10, 2022</li>
                      <li>
                        <a href='#'>Saas &amp; App</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className='title'>
                    <a href='#'>Introducing New Apps Design for our iOS App</a>
                  </h3>
                  <a href='#'>
                    Learn More <i className='fal fa-arrow-right' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='appie-blog-item mt-30 wow animated fadeInUp'
                data-wow-duration='3000ms'
                data-wow-delay='400ms'
              >
                <div className='thumb'>
                  <img src='assets/images/blog-2.jpg' alt='' />
                </div>
                <div className='content'>
                  <div className='blog-meta'>
                    <ul>
                      <li>March 10, 2022</li>
                      <li>
                        <a href='#'>Saas &amp; App</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className='title'>
                    <a href='#'>How to bring Dolce to your company</a>
                  </h3>
                  <a href='#'>
                    Learn More <i className='fal fa-arrow-right' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='appie-blog-item mt-30 wow animated fadeInUp'
                data-wow-duration='3000ms'
                data-wow-delay='600ms'
              >
                <div className='thumb'>
                  <img src='assets/images/blog-3.jpg' alt='' />
                </div>
                <div className='content'>
                  <div className='blog-meta'>
                    <ul>
                      <li>March 10, 2022</li>
                      <li>
                        <a href='#'>Saas &amp; App</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className='title'>
                    <a href='#'>17 Effective Ways to Monetize Mobile Apps</a>
                  </h3>
                  <a href='#'>
                    Learn More <i className='fal fa-arrow-right' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE BLOG PART ENDS ======*/}
      {/*====== APPIE PROJECT PART START ======*/}
      <section className='appie-project-area pb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div
                className='appie-project-box wow animated slideInUp'
                data-wow-duration='1000ms'
                data-wow-delay='0ms'
              >
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='appie-project-content'>
                      <h3 className='title'>Start your project with appie.</h3>
                      <p>We will email you only about this product.</p>
                      <form action='#'>
                        <div className='input-box mt-30'>
                          <input type='text' placeholder='Your email' />
                          <button>Subscribe</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className='appie-project-thumb'>
                  <img src='assets/images/project-thumb.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE PROJECT PART ENDS ======*/}
    </div>
  );
};

export default HomePage;
