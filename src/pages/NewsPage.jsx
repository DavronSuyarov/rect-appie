import React from 'react';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  return (
    <div>
      {/*====== APPIE PAGE TITLE PART START ======*/}
      <div className='appie-page-title-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='appie-page-title-item'>
                <h3 className='title'>Blog Grid</h3>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <Link to='/'>Home</Link>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      Blog Grid
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== APPIE PAGE TITLE PART ENDS ======*/}
      {/* Blog Start */}
      <section className='blogpage-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-7'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='post-item-1'>
                    <img src='assets/images/blog/1.jpg' alt='' />
                    <div className='b-post-details'>
                      <div className='bp-meta'>
                        <a href='#'>
                          <i className='fal fa-clock' />
                          April 22, 2020
                        </a>
                        <a href='#'>
                          <i className='fal fa-comments' />6 Comments
                        </a>
                      </div>
                      <h3>
                        <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                          Build A Full Web Chat App From Scratch.
                        </a>
                      </h3>
                      <Link className='read-more' to='1'>
                        Read More
                        <i className='fal fa-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='post-item-1'>
                    <img src='assets/images/blog/2.jpg' alt='' />
                    <div className='b-post-details'>
                      <div className='bp-meta'>
                        <a href='#'>
                          <i className='fal fa-clock' />
                          April 22, 2020
                        </a>
                        <a href='#'>
                          <i className='fal fa-comments' />6 Comments
                        </a>
                      </div>
                      <h3>
                        <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                          Insights on How to Improve Your Teaching.
                        </a>
                      </h3>
                      <a
                        className='read-more'
                        href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'
                      >
                        Read More
                        <i className='fal fa-arrow-right' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='post-item-1'>
                    <img src='assets/images/blog/3.jpg' alt='' />
                    <div className='b-post-details'>
                      <div className='bp-meta'>
                        <a href='#'>
                          <i className='fal fa-clock' />
                          April 22, 2020
                        </a>
                        <a href='#'>
                          <i className='fal fa-comments' />6 Comments
                        </a>
                      </div>
                      <h3>
                        <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                          Brush Strokes Energize Trees In Paintings
                        </a>
                      </h3>
                      <a
                        className='read-more'
                        href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'
                      >
                        Read More
                        <i className='fal fa-arrow-right' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='post-item-1'>
                    <img src='assets/images/blog/4.jpg' alt='' />
                    <div className='b-post-details'>
                      <div className='bp-meta'>
                        <a href='#'>
                          <i className='fal fa-clock' />
                          April 22, 2020
                        </a>
                        <a href='#'>
                          <i className='fal fa-comments' />6 Comments
                        </a>
                      </div>
                      <h3>
                        <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                          Learning Python for Data Analysis.
                        </a>
                      </h3>
                      <a
                        className='read-more'
                        href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'
                      >
                        Read More
                        <i className='fal fa-arrow-right' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='post-item-1'>
                    <img src='assets/images/blog/5.jpg' alt='' />
                    <div className='b-post-details'>
                      <div className='bp-meta'>
                        <a href='#'>
                          <i className='fal fa-clock' />
                          April 22, 2020
                        </a>
                        <a href='#'>
                          <i className='fal fa-comments' />6 Comments
                        </a>
                      </div>
                      <h3>
                        <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                          Logotype Masterclass with Jessica Hische
                        </a>
                      </h3>
                      <a
                        className='read-more'
                        href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'
                      >
                        Read More
                        <i className='fal fa-arrow-right' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='post-item-1'>
                    <img src='assets/images/blog/6.jpg' alt='' />
                    <div className='b-post-details'>
                      <div className='bp-meta'>
                        <a href='#'>
                          <i className='fal fa-clock' />
                          April 22, 2020
                        </a>
                        <a href='#'>
                          <i className='fal fa-comments' />6 Comments
                        </a>
                      </div>
                      <h3>
                        <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                          Build A Full Web Chat App From Scratch.
                        </a>
                      </h3>
                      <a
                        className='read-more'
                        href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'
                      >
                        Read More
                        <i className='fal fa-arrow-right' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='post-item-1'>
                    <img src='assets/images/blog/7.jpg' alt='' />
                    <div className='b-post-details'>
                      <div className='bp-meta'>
                        <a href='#'>
                          <i className='fal fa-clock' />
                          April 22, 2020
                        </a>
                        <a href='#'>
                          <i className='fal fa-comments' />6 Comments
                        </a>
                      </div>
                      <h3>
                        <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                          Learning Python for Data Analysis.
                        </a>
                      </h3>
                      <a
                        className='read-more'
                        href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'
                      >
                        Read More
                        <i className='fal fa-arrow-right' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='post-item-1'>
                    <img src='assets/images/blog/8.jpg' alt='' />
                    <div className='b-post-details'>
                      <div className='bp-meta'>
                        <a href='#'>
                          <i className='fal fa-clock' />
                          April 22, 2020
                        </a>
                        <a href='#'>
                          <i className='fal fa-comments' />6 Comments
                        </a>
                      </div>
                      <h3>
                        <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                          Learning Python for Data Analysis.
                        </a>
                      </h3>
                      <a
                        className='read-more'
                        href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'
                      >
                        Read More
                        <i className='fal fa-arrow-right' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='bisylms-pagination'>
                    <span className='current'>01</span>
                    <a href='#'>02</a>
                    <a className='next' href='#'>
                      next
                      <i className='fal fa-arrow-right' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-5'>
              <div className='blog-sidebar'>
                <aside className='widget widget-search'>
                  <form className='search-form' action='#' method='post'>
                    <input type='search' name='s' placeholder='Search...' />
                    <button type='submit'>
                      <i className='fal fa-search' />
                    </button>
                  </form>
                </aside>
                <aside className='widget widget-categories'>
                  <h3 className='widget-title'>Categories</h3>
                  <ul>
                    <li>
                      <a href='#'>Web Design</a>
                      <span>(24)</span>
                    </li>
                    <li>
                      <a href='#'>Marketing</a>
                      <span>(15)</span>
                    </li>
                    <li>
                      <a href='#'>Frontend</a>
                      <span>(8)</span>
                    </li>
                    <li>
                      <a href='#'>IT &amp; Software</a>
                      <span>(13)</span>
                    </li>
                    <li>
                      <a href='#'>Photography</a>
                      <span>(4)</span>
                    </li>
                    <li>
                      <a href='#'>Technology</a>
                      <span>(16)</span>
                    </li>
                    <li>
                      <a href='#'>General</a>
                      <span>(12)</span>
                    </li>
                  </ul>
                </aside>
                <aside className='widget widget-trend-post'>
                  <h3 className='widget-title'>Popular Posts</h3>
                  <div className='popular-post'>
                    <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                      <img src='assets/images/blog/p1.jpg' alt='' />
                    </a>
                    <h5>
                      <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                        Using creative problem Solving
                      </a>
                    </h5>
                    <span>March 10, 2020</span>
                  </div>
                  <div className='popular-post'>
                    <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                      <img src='assets/images/blog/p2.jpg' alt='' />
                    </a>
                    <h5>
                      <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                        Fundamentals of UI Design
                      </a>
                    </h5>
                    <span>Jan 14, 2020</span>
                  </div>
                  <div className='popular-post'>
                    <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                      <img src='assets/images/blog/p3.jpg' alt='' />
                    </a>
                    <h5>
                      <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                        Making music with Other people
                      </a>
                    </h5>
                    <span>April 12, 2020</span>
                  </div>
                  <div className='popular-post'>
                    <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                      <img src='assets/images/blog/p4.jpg' alt='' />
                    </a>
                    <h5>
                      <a href='https://quomodosoft.com/html/appie/assets/appie-demo/single-post.html'>
                        Brush strokes energize Trees in paintings
                      </a>
                    </h5>
                    <span>July 4, 2020</span>
                  </div>
                </aside>
                <aside className='widget'>
                  <h3 className='widget-title'>Popular Tags</h3>
                  <div className='tags'>
                    <a href='#'>Bisy LMS</a>
                    <a href='#'>Design</a>
                    <a href='#'>General</a>
                    <a href='#'>Online</a>
                    <a href='#'>Prevention</a>
                    <a href='#'>Artist</a>
                    <a href='#'>Education</a>
                    <a href='#'>Motivation</a>
                    <a href='#'>Politico</a>
                    <a href='#'>Live Cases</a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog End */}
    </div>
  );
};

export default NewsPage;
