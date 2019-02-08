import React from "react";
import { connect } from "react-redux";
import "./CategoriesPage.css";

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
        return (
            <React.Fragment>
                <div
                    onClick={this.toggleOptions}
                    className="categoryItem"
                    key={this.props.id}
                >
                    <img
                        className="categoryImage"
                        src={`${this.props.img}`}
                        alt="Category"
                    />
                    <h4 className="categoryName">{this.props.name}</h4>
                    <p className="categoryDescripton">
                        {this.props.description}
                    </p>
                    {this.state.showOptions && (
                    <div>
                        <form className="edit-rank-form">
                            <select
                                name="rank"
                                value={this.state.rank}
                                onChange={this.handleChanges}
                                className="ranks"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                                    (rank, index) => (
                                        <option value={rank}>
                                            rank {rank}
                                        </option>
                                    )
                                )}
                            </select>
                            <button
                                onClick={event =>
                                    this.props.addItemToTopNine(
                                        event,
                                        this.state.user,
                                        this.state.rank === 0
                                            ? parseInt(this.state.rank, 10) + 1
                                            : parseInt(this.state.rank),
                                        this.props.id
                                    )
                                }
                            >
                                Add to My Top 9
                            </button>
                            <button
                                onClick={event =>
                                    this.props.deleteCategory(
                                        event,
                                        this.props.id
                                    )
                                }
                            >
                                Delete Category
                            </button>
                        </form>
                    </div>
                )}
                </div>
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
