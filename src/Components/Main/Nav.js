import React,{Component} from 'react';
import {NavLink,Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {signout} from "../../Redux/Actions/AuthActions";

class Nav extends Component {

    render() {

        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink to="/home" className="navbar-brand">WeWorld</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">

                            <NavLink to="/profile" className="nav-item">
                                <a className="nav-link">Profile</a>
                            </NavLink>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.props.signout}>Sign Out</a>
                            </li>
                        </ul>

                    </div>
                </nav>

            </div>
        );
    }
}

function mapStateToProps(state){

    return{

        profile : state.firebase.profile,
        uid : state.firebase.auth.uid

    }

}
function mapDispatchToProps(dispatch) {

    return{

        signout : bindActionCreators(signout,dispatch)

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
