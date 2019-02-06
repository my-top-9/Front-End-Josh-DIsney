import React from 'react';
import { connect } from 'react-redux';

import { getCategories } from '../../store/actions';

class HomePage extends React.Component{

  // componentDidMount() {
  //   this.props.getCategories()
  // }

  render() {
    return (
      <div>
        <nav>
          <h1>This is the Home View</h1>
          <button onClick={this.props.logoutNewUser}>LOG OUT</button>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  { getCategories }
)(HomePage)