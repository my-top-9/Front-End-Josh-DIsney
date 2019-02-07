import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class HomePage extends React.Component{

  render() {
    return (
      <div>
        <h1>This is the Home View</h1>
        <div>
          <NavLink to='/categories'>Select Some Categories</NavLink>
          <NavLink to='/my-top-9'>Your Top 9!</NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  {}
)(HomePage)