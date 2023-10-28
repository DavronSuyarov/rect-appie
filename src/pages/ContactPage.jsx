import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div>
      {/*====== APPIE PAGE TITLE PART START ======*/}
      <div className='appie-page-title-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='appie-page-title-item'>
                <h3 className='title'>Contact</h3>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <Link to='/'>Home</Link>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== APPIE PAGE TITLE PART ENDS ======*/}
      {/* Contact Start */}
      <section className='contact-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='contact--info-area'>
                <h3>Get in touch</h3>
                <p>
                  Looking for help? Fill the form and start a new adventure.
                </p>
                <div className='single-info'>
                  <h5>Headquaters</h5>
                  <p>
                    <i className='fal fa-home' />
                    744 New York Ave, Brooklyn, Kings,
                    <br /> New York 10224
                  </p>
                </div>
                <div className='single-info'>
                  <h5>Phone</h5>
                  <p>
                    <i className='fal fa-phone' />
                    (+642) 245 356 432
                    <br />
                    (+420) 336 476 328
                  </p>
                </div>
                <div className='single-info'>
                  <h5>Support</h5>
                  <p>
                    <i className='fal fa-envelope' />
                    bisy@support.com
                    <br />
                    help@education.com
                  </p>
                </div>
                <div className='ab-social'>
                  <h5>Follow Us</h5>
                  <a className='fac' href='#'>
                    <i className='fab fa-facebook-f' />
                  </a>
                  <a className='twi' href='#'>
                    <i className='fab fa-twitter' />
                  </a>
                  <a className='you' href='#'>
                    <i className='fab fa-youtube' />
                  </a>
                  <a className='lin' href='#'>
                    <i className='fab fa-linkedin-in' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='contact-form'>
                <h4>Let’s Connect</h4>
                <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                <form action='#' method='post' className='row'>
                  <div className='col-md-6'>
                    <input type='text' name='f-name' placeholder='First Name' />
                  </div>
                  <div className='col-md-6'>
                    <input type='text' name='l-name' placeholder='Last Name' />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email Address'
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='number'
                      name='phone'
                      placeholder='Phone Number'
                    />
                  </div>
                  <div className='col-md-12'>
                    <input type='text' name='suject' placeholder='Subject' />
                  </div>
                  <div className='col-md-12'>
                    <textarea
                      name='message'
                      placeholder='How can we help?'
                      defaultValue={''}
                    />
                  </div>
                  <div className='col-md-6'>
                    <div className='condition-check'>
                      <input id='terms-conditions' type='checkbox' />
                      <label htmlFor='terms-conditions'>
                        I agree to the <a href='#'>Terms &amp; Conditions</a>
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6 text-right'>
                    <input
                      type='submit'
                      name='submit'
                      defaultValue='Send Message'
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact End */}
      {/* Gamps Start */}
      <div className='bisylms-map'>
        <iframe src='https://maps.google.com/maps?width=720&height=600&hl=en&coord=39.966528,-75.158284&q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&ie=UTF8&t=p&z=16&iwloc=B&output=embed' />
      </div>
      {/* Gam
       */}
    </div>
  );
};

export default ContactPage;
