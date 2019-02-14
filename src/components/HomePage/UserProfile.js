import React from "react";
import axios from "axios";
import "./UserProfile.css";


class UserProfile extends React.Component {
    state = {
        user: []
    };
    componentDidMount() {
        axios
            .get(
                `https://my-top-9.herokuapp.com/api/users/${this.props.user.id}`
            )
            .then(resp => this.setState({ user: resp.data }));
    }
    render() {
        return (
            <React.Fragment>
                <h4 className="username">{this.props.user.username}</h4>
                <div className="user-profile">
                    {this.state.user.map((user, index) => {
                        if (index < 9)
                            return (
                                <div className="user-info">
                                    <div className="img-box">
                                        <p>Rank {index+1}</p>
                                        <img src={user.img} alt="rank" />
                                    </div>
                                </div>
                            );
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default UserProfile;
