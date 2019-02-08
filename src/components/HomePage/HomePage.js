import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import top9 from './top9.png';

import './HomePage.css';

class HomePage extends React.Component{

  render() {
    return (
      <div className='homeContainer'>
        <h1 className='homeHeading'>MY-TOP-9</h1>
        <section className='homeSections'>
          <div className='catLinkContainer'>
            <NavLink to='/categories' className='homeLink'>Select Some Categories</NavLink>
            <div className='previewImages'>
              <img className='linkImage' src='http://www.jamespreller.com/wp-content/uploads/2009/07/yoda-300x300.jpg' alt='category option' />
              <img className='linkImage' src='https://static-cdn.jtvnw.net/jtv_user_pictures/757608c422c1768f-profile_image-300x300.png' alt='category option' />
            </div>
          </div>
          <div className='topNineLinkContainer'>
            <NavLink to='/my-top-9' className='homeLink'>My Top 9</NavLink>
            <img className='linkImage' src={top9} alt='top-nine-grid' />
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  {}
)(HomePage)