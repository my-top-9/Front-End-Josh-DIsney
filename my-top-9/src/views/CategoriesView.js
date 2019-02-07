import React from 'react';
import { connect } from 'react-redux';

import CategoriesPage from '../components/CategoriesPage/CategoriesPage';
import { getCategories, addToTopNine, deleteCategory } from '../store/actions';

class CategoriesView extends React.Component {

  componentDidMount() {
    this.props.getCategories();
  }

  deleteCategory = (event, id) => {
    event.preventDefault()
    this.props.deleteCategory(id)
  }
  
  addItemToTopNine = (event, userId, rank, categoryId) => {
    event.preventDefault()
    console.log('props',this.props)
    console.log('state',this.state)
    this.props.addToTopNine(userId, rank, categoryId)
  }

  render() {
    console.log('cat props', this.props)
    return (
      <div className='categoriesContainer'>
        <h1 className='categoriesHeader'>Categories go here!</h1>
        <div className='categoryList'>
          {this.props.categories.map(category => (
           <CategoriesPage 
            {...category}
            addItemToTopNine={this.addItemToTopNine} 
            deleteCategory={this.deleteCategory}
            key={category.name}
          />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categoryReducer.categories,
  user: state.loginReducer.user
})

export default connect(
  mapStateToProps,
  { getCategories, addToTopNine, deleteCategory }
)(CategoriesView)