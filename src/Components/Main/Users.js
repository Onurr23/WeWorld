import React, { Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import "../../Style/Home.css"
import {signout} from "../../Redux/Actions/AuthActions";
import Confirm from "../Actions/Confirm";
import Pass from "../Actions/Pass";
import {Redirect} from "react-router-dom";

class Users extends Component {

    render() {

        if(!this.props.uid) return <Redirect to="/" />

        let uid = this.props.id
        let newUsers = this.props.users.filter(u=>{

            return u.id !== uid

        })

        let newUser = newUsers[this.props.lookedAt]
        if(!newUser){
            return (

                <div>
                    ...Loading
                </div>
            )
        }

        if( newUsers.length <= this.props.lookedAt){

            return (
                <div>

                    Looks like you are out of people !

                </div>

            )

        }else{

            return (
                <div className="user-container">

                    <div className="card">

                        <img src={newUser.image} className="avatar" alt=""/>
                        <h1 className="user-name">{newUser.name}</h1>
                        <h2 className="user-age">{newUser.age}</h2>

                    </div>

                    <div className="buttons">
                        <Confirm history={this.props.history} user={newUser}/>
                        <Pass history={this.props.history} user={newUser}/>
                    </div>


                </div>
            )

        }

    }
}

function mapStateToProps(state) {

    return{

        users : state.firestore.ordered.users || state.persons,
        lookedAt : state.firebase.profile.lookAt,
        id : state.firebase.profile.id,
        profile : state.firebase.profile,
        uid : state.firebase.auth.uid

    }

}
function mapDispatchToProps(dispatch) {

    return{

        signOut : bindActionCreators(signout,dispatch)

    }

}

export default compose(connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect(props=>[
        {collection : 'users'}
    ]))(Users)
