import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='appie-error-area'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='appie-error-content text-center'>
              <img src='assets/images/error.png' alt='' />
              <span>Sorry!</span>
              <h3 className='title'>The page can’t be found.</h3>
              <p>
                The page you're looking for isn't available. Try with another
                page or use the go home button below
              </p>
              <Link to='/'>
                Back to Home <i className='fal fa-arrow-right' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
