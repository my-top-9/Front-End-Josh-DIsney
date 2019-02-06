import React from 'react';
import { connect } from 'react-redux';

import CategoriesView from '../../views/CategoriesView';

class HomePage extends React.Component{

  render() {
    return (
      <div>
        <nav>
          <h1>This is the Home View</h1>
          <button onClick={this.props.logoutNewUser}>LOG OUT</button>
        </nav>
        <div>
          <CategoriesView />
          <div>
            <h1>MyTop9View</h1>
          </div>
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