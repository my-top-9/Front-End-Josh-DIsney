import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../store/actions";

class TopNine extends React.Component {
    componentDidMount() {
        this.props.getUser(localStorage.getItem("user"));
    }
    render() {
        console.log("TOP9PROPS", this.props.user);
        return (
            <div>
                <h1>Top Nine Goes Here</h1>
                <div>
                    {this.props.user.map(user => {
                        return (
                            <div>
                                <h4>{user.name}</h4>
                                <p>{user.description}</p>
                                <img src={user.img} alt={user.name} />
                            </div>
                        );
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
