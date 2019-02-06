import React from 'react';
import { connect } from 'react-redux';

import CategoriesPage from '../components/CategoriesPage/CategoriesPage';
import { getCategories } from '../store/actions';

class CategoriesView extends React.Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div>
        <CategoriesPage
          categories={this.props.categories}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categoryReducer.categories
})

export default connect(
  mapStateToProps,
  { getCategories }
)(CategoriesView)