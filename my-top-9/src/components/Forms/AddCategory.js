import React from "react";
import axios from "axios";

class AddCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      name: "",
      description: ""
    };
  }

  addCategory = event => {
    event.preventDefault();

    axios
      .post("https://my-top-9.herokuapp.com/api/categories", this.state)
      .then(response => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="addCategoryContainer">
        <h2>Add New Category</h2>
        <form onSubmit={this.addCategory} className="addCategoryForm">
          <label>
            Image:
            <input
              className="addCategory"
              type="text"
              name="img"
              placeholder="Place img here..."
              value={this.state.img}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Name:
            <input
              className="addCategory"
              type="text"
              name="name"
              placeholder="Name..."
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Description:
            <input
              className="addCategory"
              type="text"
              name="description"
              placeholder="Description..."
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </label>
          <button onClick={this.addCategory} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddCategory;
