import React from 'react';
import { connect } from 'react-redux';

class CategoriesPage extends React.Component {

  render() {
    console.log('categories props', this.props)
    return (
      <div className='categoriesContainer'>
        <h1 className='categoriesHeader'>Categories go here!</h1>
        <div className='categoryList'>
          {this.props.categories.map(category => (
            <div
              className='categoryItem'
              key={category.id}
            >
              <h4 className='categoryName'>{category.name}</h4>
              <img className='categoryImage' src={`${category.img}`} alt='Category' />
              <p className='categoryDescripton'>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  {}
)(CategoriesPage)