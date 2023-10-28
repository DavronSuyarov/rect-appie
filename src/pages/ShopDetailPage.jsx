import React from 'react';
import { Link } from 'react-router-dom';

const ShopDetailPage = () => {
  return (
    <div>
      {/*====== APPIE PAGE TITLE PART START ======*/}
      <div className='appie-page-title-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='appie-page-title-item'>
                <h3 className='title'>Smartwatch with Music</h3>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <a href='#'>Home</a>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      <Link to='shop'>Shop Grid</Link>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      Smartwatch with Music
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
      {/*====== APPIE SHOP DETAILS PART ENDS ======*/}
      <section className='shop-details-area pt-100 pb-100'>
        <div className='container'>
          <div className='row '>
            <div className='col-lg-6'>
              <div className='shop-details-thumb'>
                <div className='shop-details-thumb-slider-active'>
                  <div className='item'>
                    <img src='assets/images/shop-details-thumb-1.jpg' alt='' />
                  </div>
                  <div className='item'>
                    <img src='assets/images/shop-details-thumb-1.jpg' alt='' />
                  </div>
                  <div className='item'>
                    <img src='assets/images/shop-details-thumb-1.jpg' alt='' />
                  </div>
                  <div className='item'>
                    <img src='assets/images/shop-details-thumb-1.jpg' alt='' />
                  </div>
                  <div className='item'>
                    <img src='assets/images/shop-details-thumb-1.jpg' alt='' />
                  </div>
                </div>
              </div>
              <div className='shop-small-slider-active mt-10'>
                <div className='item'>
                  <img src='assets/images/shop-details-small-1.jpg' alt='' />
                </div>
                <div className='item'>
                  <img src='assets/images/shop-details-small-2.jpg' alt='' />
                </div>
                <div className='item'>
                  <img src='assets/images/shop-details-small-3.jpg' alt='' />
                </div>
                <div className='item'>
                  <img src='assets/images/shop-details-small-4.jpg' alt='' />
                </div>
                <div className='item'>
                  <img src='assets/images/shop-details-small-2.jpg' alt='' />
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='shop-product-details-content pl-70 mt-35'>
                <span>In stock</span>
                <h2 className='title'>Smartwatch with Music</h2>
                <div className='pricing'>
                  <div className='discount-price mr-15'>$114.00</div>
                  <div className='regular-price'>$172.00</div>
                </div>
                <div className='review'>
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
                      <i className='fas fa-star-half-alt' />
                    </li>
                  </ul>
                  <span>(4 reviews)</span>
                </div>
                <p>
                  So I said nancy boy he lost his bottle smashing mush brolly
                  victoria sponge loo, bobby say Charles gutted mate bugger
                  fanny around, lurgy grub some dodgy chav blatant blag me old
                  mucker.
                </p>
                <div className='shop-buttons d-block d-sm-flex align-items-center'>
                  <div className='product-quantity' id='quantity'>
                    <button type='button' id='sub' className='sub'>
                      -
                    </button>
                    <input type='text' id={1} defaultValue={0} />
                    <button type='button' id='add' className='add'>
                      +
                    </button>
                  </div>
                  <a className='main-btn ml-10' href='#'>
                    Add To Cart
                  </a>
                </div>
                <div className='details-info'>
                  <ul>
                    <li>
                      <span>SKU:</span> 42725-AB-6{' '}
                    </li>
                    <li>
                      <span>Categories: </span> Watch, Appie, UX{' '}
                    </li>
                    <li>
                      <span>Tags:</span> Creative, Shop, WordPress{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE SHOP DETAILS PART ENDS ======*/}
      {/*====== APPIE SHOP DETAILS PART ENDS ======*/}
      <div className='shop-details-info-area pt-85 pb-100 '>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='shop-details-box'>
                <ul
                  className='nav nav-pills mb-35'
                  id='pills-tab'
                  role='tablist'
                >
                  <li className='nav-item' role='presentation'>
                    <a
                      className='nav-link'
                      id='pills-home-tab'
                      data-toggle='pill'
                      href='#pills-home'
                      role='tab'
                      aria-controls='pills-home'
                      aria-selected='true'
                    >
                      Description
                    </a>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <a
                      className='nav-link active'
                      id='pills-profile-tab'
                      data-toggle='pill'
                      href='#pills-profile'
                      role='tab'
                      aria-controls='pills-profile'
                      aria-selected='false'
                    >
                      Reviews (2)
                    </a>
                  </li>
                </ul>
                <div className='tab-content' id='pills-tabContent'>
                  <div
                    className='tab-pane fade'
                    id='pills-home'
                    role='tabpanel'
                    aria-labelledby='pills-home-tab'
                  >
                    <div className='shop-description'>
                      <p>
                        Uninhibited carnally hired played in whimpered dear
                        gorilla koala depending and much yikes off far quetzal
                        goodness and from for grimaced goodness unaccountably
                        and meadowlark near unblushingly crucial scallop tightly
                        neurotic hungrily some and dear furiously this apart.
                        Spluttered narrowly yikes left moth in yikes bowed this
                        that grizzly much hello on spoon-fed that alas rethought
                        much decently richly and wow against the frequent
                        fluidly at formidable acceptably flapped besides and
                        much circa far over the bucolically hey precarious
                        goldfinch mastodon goodness gnashed a jellyfish and one
                        however because.
                      </p>
                      <p>
                        Laconic overheard dear woodchuck wow this outrageously
                        taut beaver hey hello far meadowlark imitatively
                        egregiously hugged that yikes minimally unanimous pouted
                        flirtatiously as beaver beheld above forward energetic
                        across this jeepers beneficently cockily less a the
                        raucously that magic upheld far so the this where crud
                        then below after jeez enchanting drunkenly more much wow
                        callously irrespective limpet.
                      </p>
                      <h4 className='title'>Packaging &amp; Delivery</h4>
                      <p>
                        Less lion goodness that euphemistically robin
                        expeditiously bluebird smugly scratched far while thus
                        cackled sheepishly rigid after due one assenting
                        regarding censorious while occasional or this more crane
                        went more as this less much amid overhung anathematic
                        because much held one exuberantly sheep goodness so
                        where rat wry well concomitantly.
                      </p>
                      <p>
                        Scallop or far crud plain remarkably far by thus far
                        iguana lewd precociously and and less rattlesnake
                        contrary caustic wow this near alas and next and pled
                        the yikes articulate about as less cackled dalmatian in
                        much less well jeering for the thanks blindly
                        sentimental whimpered less across objectively fanciful
                        grimaced wildly some wow and rose jeepers outgrew
                        lugubrious luridly irrationally attractively dachshund.
                      </p>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade show active'
                    id='pills-profile'
                    role='tabpanel'
                    aria-labelledby='pills-profile-tab'
                  >
                    <div className='review-rating-box'>
                      <div className='top-rating-result'>
                        <h3 className='title'>2 Reviews for Watch</h3>
                        <div className='rating-result-box'>
                          <div className='thumb'>
                            <img
                              src='assets/images/testimonial-user-2.png'
                              alt=''
                            />
                          </div>
                          <div className='content'>
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
                                <i className='fas fa-star-half-alt' />
                              </li>
                            </ul>
                            <div className='shop-meta'>
                              <div className='author-user-name'>
                                <a href='#'>Will Barrow</a>
                              </div>
                              <div className='date'>
                                <span>March 15, 2022</span>
                              </div>
                            </div>
                            <p>
                              That arse over tit a load of old tosh pardon you
                              wellies amongst william my good sir grub your bike
                              mate james bond morish a blinding.
                            </p>
                          </div>
                        </div>
                        <div className='rating-result-box'>
                          <div className='thumb'>
                            <img
                              src='assets/images/testimonial-user-1.png'
                              alt=''
                            />
                          </div>
                          <div className='content'>
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
                                <i className='fas fa-star-half-alt' />
                              </li>
                            </ul>
                            <div className='shop-meta'>
                              <div className='author-user-name'>
                                <a href='#'>Elon Gated</a>
                              </div>
                              <div className='date'>
                                <span>April 24, 2022</span>
                              </div>
                            </div>
                            <p>
                              Lost the plot twit the full monty down the pub Why
                              off his nut cheers say a blinding shot happy days
                              bog argy bargy.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='review-box'>
                        <div className='review-title'>
                          <h4 className='title'>Add a Review</h4>
                          <p>
                            Your email address will not be published.Required
                            fields are marked*
                          </p>
                        </div>
                        <div className='add-review-star'>
                          <span>Rate this product:</span>
                          <ul>
                            <li>
                              <i className='fas fa-star' />
                            </li>
                            <li>
                              <i className='fas fa-star' />
                            </li>
                            <li>
                              <i className='fal fa-star' />
                            </li>
                            <li>
                              <i className='fal fa-star' />
                            </li>
                            <li>
                              <i className='fal fa-star' />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='rating-form-box'>
                        <form action='#'>
                          <div className='input-box'>
                            <label htmlFor='#'>Name *</label>
                            <input type='text' placeholder='Username' />
                          </div>
                          <div className='input-box'>
                            <label htmlFor='#'>Email *</label>
                            <input type='email' placeholder='E-mail address' />
                          </div>
                          <div className='input-box'>
                            <label htmlFor='#'>Your review </label>
                            <textarea
                              name='#'
                              id='#'
                              cols={30}
                              rows={10}
                              placeholder='Type you message'
                              defaultValue={''}
                            />
                          </div>
                          <div className='input-box'>
                            <div className='condition-check pb-15'>
                              <input id='terms-conditions' type='checkbox' />
                              <label htmlFor='terms-conditions'>
                                Save my name, email, and website in this browser
                                for the next time I comment
                              </label>
                            </div>
                            <button className='main-btn' type='submit'>
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== APPIE SHOP DETAILS PART ENDS ======*/}
      {/*====== APPIE SHOP RELATED PRODUCT PART ENDS ======*/}
      <div className='shop-related-area pt-90 pb-170'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='appie-section-title text-center'>
                <h3 className='appie-title'>Related products</h3>
                <p>
                  So I said knees up cuppa such a fibber jeffrey a bit of how's
                  your.
                </p>
              </div>
            </div>
          </div>
          <div className='row shop-related-product-slider-active'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-shop-box'>
                <div className='thumb text-center'>
                  <img src='assets/images/shop-grid-1.jpg' alt='' />
                  <div className='reborn'>
                    <span>Sale</span>
                  </div>
                  <div className='cart-list-icon'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fal fa-shopping-bag' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fal fa-heart' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fal fa-eye' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='content'>
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
                      <i className='fas fa-star-half-alt' />
                    </li>
                  </ul>
                  <a href='#'>Smartwatch with Music</a>
                  <div className='pricing'>
                    <div className='discount-price'>$158.00 </div>
                    <div className='regular-price'>$180.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-shop-box'>
                <div className='thumb text-center'>
                  <img src='assets/images/shop-grid-2.jpg' alt='' />
                  <div className='reborn'></div>
                  <div className='cart-list-icon'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fal fa-shopping-bag' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fal fa-heart' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fal fa-eye' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='content'>
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
                      <i className='fas fa-star-half-alt' />
                    </li>
                  </ul>
                  <a href='#'>Smartwatch with Music</a>
                  <div className='pricing'>
                    <div className='discount-price'>$158.00 </div>
                    <div className='regular-price'>$180.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-shop-box'>
                <div className='thumb text-center'>
                  <img src='assets/images/shop-grid-3.jpg' alt='' />
                  <div className='reborn'>
                    <span>Hot</span>
                  </div>
                  <div className='cart-list-icon'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fal fa-shopping-bag' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fal fa-heart' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fal fa-eye' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='content'>
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
                      <i className='fas fa-star-half-alt' />
                    </li>
                  </ul>
                  <a href='#'>Smartwatch with Music</a>
                  <div className='pricing'>
                    <div className='discount-price'>$158.00 </div>
                    <div className='regular-price'>$180.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-shop-box'>
                <div className='thumb text-center'>
                  <img src='assets/images/shop-grid-4.jpg' alt='' />
                  <div className='reborn'></div>
                  <div className='cart-list-icon'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fal fa-shopping-bag' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fal fa-heart' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fal fa-eye' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='content'>
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
                      <i className='fas fa-star-half-alt' />
                    </li>
                  </ul>
                  <a href='#'>Smartwatch with Music</a>
                  <div className='pricing'>
                    <div className='discount-price'>$158.00 </div>
                    <div className='regular-price'>$180.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-shop-box'>
                <div className='thumb text-center'>
                  <img src='assets/images/shop-grid-5.jpg' alt='' />
                  <div className='reborn'>
                    <span>New</span>
                  </div>
                  <div className='cart-list-icon'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fal fa-shopping-bag' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fal fa-heart' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fal fa-eye' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='content'>
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
                      <i className='fas fa-star-half-alt' />
                    </li>
                  </ul>
                  <a href='#'>Smartwatch with Music</a>
                  <div className='pricing'>
                    <div className='discount-price'>$158.00 </div>
                    <div className='regular-price'>$180.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== APPIE SHOP RELATED PRODUCT PART ENDS ======*/}
    </div>
  );
};

export default ShopDetailPage;
