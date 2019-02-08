import React from "react";
import axios from "axios";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

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
        <Form onSubmit={this.addCategory} className="addCategoryForm">
          <FormGroup row>
            <Label sm={2}>Image:</Label>
            <Col sm={10}>
              <input
                className="addCategory"
                type="text"
                name="img"
                placeholder="Place img here..."
                value={this.state.img}
                onChange={this.handleChange}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Name:</Label>
            <Col sm={10}>
              <Input
                className="addCategory"
                type="text"
                name="name"
                placeholder="Name..."
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Description:</Label>
            <Col sm={10}>
              <input
                className="addCategory"
                type="text"
                name="description"
                placeholder="Description..."
                value={this.state.description}
                onChange={this.handleChange}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button onClick={this.addCategory} type="submit">
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default AddCategory;
