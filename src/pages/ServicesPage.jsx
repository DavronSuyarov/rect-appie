import React from 'react';

const ServicesPage = () => {
  return (
    <div>
      {/*====== APPIE PAGE TITLE PART START ======*/}
      <div className='appie-page-title-area appie-page-service-title-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='appie-page-title-item'>
                <span>Fast Development</span>
                <h3 className='title'>
                  Simple but effective, <br /> effortless yet powerful.
                </h3>
                <div className='thumb'>
                  <img src='assets/images/fun-fact-thumb.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== APPIE PAGE TITLE PART ENDS ======*/}
      {/*====== APPIE SERVICE DETAILS PART ENDS ======*/}
      <section className='appie-service-details-area pt-100 pb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='service-details-sidebar mr-50'>
                <div className='service-category-widget'>
                  <ul>
                    <li>
                      <i className='fal fa-home' />
                      Fast Development
                    </li>
                    <li>
                      <i className='fal fa-tag' />
                      App, UX
                    </li>
                    <li>
                      <i className='fal fa-user-friends' />
                      20-30 Employees
                    </li>
                    <li>
                      <i className='fal fa-bookmark' />
                      Appie Template
                    </li>
                    <li>
                      <i className='fal fa-globe' />
                      quomodosoft.com/appie
                    </li>
                  </ul>
                </div>
                <div className='service-download-widget'>
                  <a href='#'>
                    <i className='fal fa-download' />
                    <span>Download docs</span>
                  </a>
                </div>
                <div className='service-download-widget'>
                  <a href='#'>
                    <i className='fal fa-file-pdf' />
                    <span>Characteristics</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='service-details-content'>
                <div className='thumb'>
                  <img src='assets/images/service-details-thumb.jpg' alt='' />
                </div>
                <div className='content'>
                  <h3 className='title'>What we're Building</h3>
                  <p>
                    Tomfoolery wind up blag me old mucker chap super ruddy
                    chancer bobby, vagabond it's your round cuppa cheesed off
                    blower nice one at public school, Why cockup knackered pear
                    shaped amongst spiffing good time he nicked it.
                  </p>
                  <span>
                    He lost his bottle mufty spend a penny cheeky at public
                    school daft get stuffed mate don't get shirty.
                  </span>
                  <p>
                    My good sir cup of char no biggie knees up happy days
                    absolutely bladdered don't get shirty with me chimney pot
                    James Bond he lost his bottle me old mucker, bobby nice one
                    cack codswallop what a load of rubbish Jeffrey barmy blower
                    tomfoolery, crikey only a quid at public school mufty tosser
                    up the duff say Richard I don't want no agro. Owt to do with
                    me barney quaint jolly good off his nut vagabond pardon you
                    gutted mate the little rotter excuse my French, the bee's
                    knees don't get shirty with me he nicked it give us a bell
                    zonked lavatory Charles gosh, Eaton the BBC is victoria
                    sponge a William bog what a load of rubbish. Smashing only a
                    quid cockup he lost his bottle bugger Jeffrey mufty,
                    starkers blatant zonked easy peasy brolly car boot, blimey
                    at public school cheeky bugger you mug david. Tomfoolery a
                    load of old tosh Queen's English lemon squeezy old
                    hunky-dory mush chap give us a bell bloke, chancer knackered
                    cheesed off buggered tinkety tonk old fruit car boot only a
                    quid spiffing good time chinwag, he lost his bottle pukka
                    gutted mate naff horse play cup of tea baking cakes a
                    blinding shot. bobby the wireless matie boy show.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE SERVICE DETAILS PART ENDS ======*/}
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

export default ServicesPage;
