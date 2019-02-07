import React from "react";
import { connect } from "react-redux";

class CategoriesPage extends React.Component {
  state = {
    showOptions: false,
    rank: 0,
    user: null
  };

  toggleOptions = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({
      user: user
    });
  }

  render() {
    console.log("categories props", this.props);
    console.log("");
    return (
      <React.Fragment>
        <div
          onClick={this.toggleOptions}
          className="categoryItem"
          key={this.props.id}
        >
          <h4 className="categoryName">{this.props.name}</h4>
          <img
            className="categoryImage"
            src={`${this.props.img}`}
            alt="Category"
          />
          <p className="categoryDescripton">{this.props.description}</p>
        </div>
        {this.state.showOptions && (
          <div>
            <form>
              <select
                name="rank"
                value={this.state.rank}
                onChange={this.handleChanges}
                className="ranks"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(rank => (
                  <option value={rank}>rank {rank}</option>
                ))}
              </select>
              <button
                onClick={event =>
                  this.props.addItemToTopNine(
                    event,
                    this.state.user,
                    parseInt(this.state.rank, 10) + 1,
                    this.props.id
                  )
                }
              >
                Add to My Top 9
              </button>
              <button
                onClick={event =>
                  this.props.deleteCategory(event, this.props.id)
                }
              >
                Delete Category
              </button>
            </form>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user
});

export default connect(
  mapStateToProps,
  {}
)(CategoriesPage);
