import React, { Component } from 'react'
import {connect} from "react-redux";
import "../../Style/Home.css";
import {signout} from "../../Redux/Actions/AuthActions";
import {bindActionCreators} from "redux";
import {Redirect} from "react-router-dom";
import Users from "./Users";
import Nav from "./Nav";


class Home extends Component {


    render() {

        if(!this.props.auth) return <Redirect to="/" />

        return (
            <div>

                <Nav/>

                <Users history={this.props.history} />

            </div>
        )
    }
}

function mapStateToProps(state){

    return{

        persons : state.persons,
        auth : state.firebase.auth.uid

    }

}

function mapDispatchToProps(dispatch) {
    return {

        signOut : bindActionCreators(signout,dispatch)

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
