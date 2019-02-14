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
                    {this.props.user ? null : (this.props.user = [])}
                    {this.props.user.map((user, index) => {
                        if (index < 9) {
                            return (
                                <div
                                    key={Math.random() * Date.now() * index}
                                    className="category-card"
                                >
                                    <img
                                        src={user.img || "NULL"}
                                        alt={user.name || "NULL"}
                                    />
                                    <h4 className="user-cat-title">
                                        {user.name.toUpperCase() || "NULL"}
                                    </h4>
                                    <p className="user-cat-desc">
                                        {user.description || "NULL"}
                                    </p>
                                    <p className="user-cat-rank">
                                        <strong>
                                            Rank {index + 1 || "NULL"}
                                        </strong>
                                    </p>
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
