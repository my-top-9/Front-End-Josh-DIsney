import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import top9 from "./top9.png";
import UserProfile from './UserProfile';
import axios from "axios";
import "./HomePage.css";

class HomePage extends React.Component {
    state = {
        users: [],
        categories: [],
        error: "",
    };

    componentDidMount() {
        axios
            .get("https://my-top-9.herokuapp.com/api/users")
            .then(resp => {
                this.setState({ users: resp.data });
            })
            .catch(err => this.setState({ error: err }));

        axios
            .get(`https://my-top-9.herokuapp.com/api/categories/`)
            .then(response => {
                this.setState({ categories: response.data });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    render() {
        return (
            <div className="homeContainer">
                <h1 className="homeHeading">MY-TOP-9</h1>
                <section className="homeSections">
                    <div className="catLinkContainer">
                        <NavLink to="/categories" className="homeLink">
                            Select Some Categories
                        </NavLink>
                        <div className="previewImages">
                            <img
                                className="linkImage"
                                src="http://www.jamespreller.com/wp-content/uploads/2009/07/yoda-300x300.jpg"
                                alt="category option"
                            />
                            <img
                                className="linkImage"
                                src="https://static-cdn.jtvnw.net/jtv_user_pictures/757608c422c1768f-profile_image-300x300.png"
                                alt="category option"
                            />
                        </div>
                    </div>
                    <div className="topNineLinkContainer">
                        <NavLink to="/my-top-9" className="homeLink">
                            My Top 9
                        </NavLink>
                        <img
                            className="linkImage"
                            src={top9}
                            alt="top-nine-grid"
                        />
                    </div>
                </section>
                <div className="users-list-container">
                    {this.state.users.map(user => {
                        return (
                            <div className="user-card">
                                <h4 className="user-card-title">
                                    <UserProfile user={user} />
                                </h4>
                                <div className="img-cat-matches">
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {}
)(HomePage);
