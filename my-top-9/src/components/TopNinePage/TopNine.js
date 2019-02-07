import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../store/actions";
import "./TopNine.css";

class TopNine extends React.Component {
    componentDidMount() {
        this.props.getUser(localStorage.getItem("user"));
    }
    render() {
        console.log("TOP9PROPS", this.props.user);
        return (
            <div className="top9-container">
                <h1 className="top9-header">Your Top Nine Categories!!</h1>
                <div className="rankmap">
                    {this.props.user.map((user, index) => {
                        if (index < 9) {
                            return (
                                <div className="category-card">
                                    <img src={user.img || ''} alt={user.name} />
                                    <h4 className="user-cat-title">{user.name.toUpperCase()}</h4>
                                    <p className="user-cat-desc">{user.description}</p>
                                    <p className="user-cat-rank"><strong>Rank {index + 1}</strong></p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.loginReducer.user
});

export default connect(
    mapStateToProps,
    { getUser }
)(TopNine);
