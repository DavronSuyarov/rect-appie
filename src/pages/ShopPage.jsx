import React from 'react';
import { Link } from 'react-router-dom';

const ShopPage = () => {
  return (
    <div>
      {/*====== APPIE PAGE TITLE PART START ======*/}
      <div className='appie-page-title-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='appie-page-title-item'>
                <h3 className='title'>Shop Grid</h3>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <Link to='/'>Home</Link>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      Shop Grid
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
      {/*====== APPIE SHOP GRID PART ENDS ======*/}
      <div className='appie-shop-grid-area pt-100 pb-50'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 order-2 order-lg-1'>
              <div className='appie-shop-sidebar'>
                <div className='shop-price-filter'>
                  <h4 className='title'>Filter by Price</h4>
                  <div className='price-range'>
                    <div className='box-1' />
                    <div className='box-2' />
                  </div>
                  <div className='main-filter-price d-flex justify-content-between align-items-center'>
                    <span>Price: $130 - $340</span>
                    <a href='#'>Filter</a>
                  </div>
                </div>
                <div className='shop-category-widget'>
                  <h4 className='title'>Product Categories</h4>
                  <ul>
                    <li>
                      <a href='#'>Classic</a>
                    </li>
                    <li>
                      <a href='#'>Gadgets</a>
                    </li>
                    <li>
                      <a href='#'>Chair &amp; Tables</a>
                    </li>
                    <li>
                      <a href='#'>Men</a>
                    </li>
                    <li>
                      <a href='#'>Uncategorized</a>
                    </li>
                    <li>
                      <a href='#'>Modern</a>
                    </li>
                  </ul>
                </div>
                <div className='shop-best-product-widget'>
                  <h4 className='title'>Best Seller</h4>
                  <div className='shop-product'>
                    <div className='thumb'>
                      <img src='assets/images/shop-1.jpg' alt='' />
                    </div>
                    <div className='content'>
                      <a href='#'>Razer Kraken Tournament</a>
                      <span>$44.00</span>
                    </div>
                  </div>
                  <div className='shop-product'>
                    <div className='thumb'>
                      <img src='assets/images/shop-2.jpg' alt='' />
                    </div>
                    <div className='content'>
                      <a href='#'>iPhone 8 Plus Case</a>
                      <span>$44.00</span>
                    </div>
                  </div>
                  <div className='shop-product'>
                    <div className='thumb'>
                      <img src='assets/images/shop-3.jpg' alt='' />
                    </div>
                    <div className='content'>
                      <a href='#'>Mango Women’s Bag</a>
                      <span>$44.00</span>
                    </div>
                  </div>
                </div>
                <div className='shop-tags-bar'>
                  <h4 className='title'>Popular Tags</h4>
                  <ul>
                    <li>
                      <a href='#'>Women</a>
                    </li>
                    <li>
                      <a href='#'>Modern</a>
                    </li>
                    <li>
                      <a href='#'>Men</a>
                    </li>
                    <li>
                      <a href='#'>Luxurious</a>
                    </li>
                    <li>
                      <a href='#'>Classic</a>
                    </li>
                    <li>
                      <a href='#'>Services</a>
                    </li>
                    <li>
                      <a href='#'>Shop</a>
                    </li>
                    <li>
                      <a href='#'>Fashion</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-9 order-1 order-lg-2'>
              <div className='shop-grid-topbar d-flex justify-content-between align-items-center'>
                <span>
                  Showing all <span>12</span> results
                </span>
                <select id='cars'>
                  <option value='volvo'>Volvo</option>
                  <option value='saab'>Saab</option>
                  <option value='vw'>VW</option>
                  <option value='audi' selected>
                    Audi
                  </option>
                </select>
              </div>
              <div className='row'>
                <div className='col-lg-4 col-md-6'>
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
                      <Link to='1'>Smartwatch with Music</Link>
                      <div className='pricing'>
                        <div className='discount-price'>$158.00 </div>
                        <div className='regular-price'>$180.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
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
                      <Link to='2'>Smartwatch with Music</Link>
                      <div className='pricing'>
                        <div className='discount-price'>$158.00 </div>
                        <div className='regular-price'>$180.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
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
                <div className='col-lg-4 col-md-6'>
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
                <div className='col-lg-4 col-md-6'>
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
                <div className='col-lg-4 col-md-6'>
                  <div className='single-shop-box'>
                    <div className='thumb text-center'>
                      <img src='assets/images/shop-grid-6.jpg' alt='' />
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
                <div className='col-lg-4 col-md-6'>
                  <div className='single-shop-box'>
                    <div className='thumb text-center'>
                      <img src='assets/images/shop-grid-7.jpg' alt='' />
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
                <div className='col-lg-4 col-md-6'>
                  <div className='single-shop-box'>
                    <div className='thumb text-center'>
                      <img src='assets/images/shop-grid-8.jpg' alt='' />
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
                <div className='col-lg-4 col-md-6'>
                  <div className='single-shop-box'>
                    <div className='thumb text-center'>
                      <img src='assets/images/shop-grid-9.jpg' alt='' />
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
                <div className='col-lg-4 col-md-6'>
                  <div className='single-shop-box'>
                    <div className='thumb text-center'>
                      <img src='assets/images/shop-grid-10.jpg' alt='' />
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
                <div className='col-lg-4 col-md-6'>
                  <div className='single-shop-box'>
                    <div className='thumb text-center'>
                      <img src='assets/images/shop-grid-11.jpg' alt='' />
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
                <div className='col-lg-4 col-md-6'>
                  <div className='single-shop-box'>
                    <div className='thumb text-center'>
                      <img src='assets/images/shop-grid-12.jpg' alt='' />
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
                <div className='col-lg-12'>
                  <div className='bisylms-pagination'>
                    <span className='current'>1</span>
                    <a href='#'>2</a>
                    <a href='#'>3</a>
                    <a className='next' href='#'>
                      next
                      <i className='fal fa-arrow-right' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== APPIE SHOP GRID PART ENDS ======*/}
    </div>
  );
};

export default ShopPage;
