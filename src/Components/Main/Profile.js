import React,{Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {updateUser} from "../../Redux/Actions/UserActions";
import {Link, Redirect} from "react-router-dom";
import "../../Style/profile.css"
import Nav from "./Nav";

class Profile extends Component{

    render() {

        let friends = this.props.friends
        let profile = this.props.profile

        if(!this.props.uid) return <Redirect to="/" />

        return (
            <div>

                <Nav/>

                <div className="profile">

                    <img src={profile.image} alt=""/>
                    <br/>
                    <h1>{profile.name}</h1>
                    <br/>
                    <h2>{profile.country}</h2>
                    <br/>
                    <h3>{profile.age}</h3>
                    <br/>
                    <h2>{profile.description}</h2>

                    <div>

                        <h2>Friends</h2>

                        {friends.length !== 0 ?
                            <ul>
                                {
                                    friends.map(friend=>(

                                        <Link className="btn btn-primary" to={{

                                            pathname : '/chat',
                                            state : {
                                                profile
                                            }
                                        }} key={friend.id}>{friend.name}</Link>
                                    ))
                                }
                            </ul> : <div>Alone for now... </div>
                        }
                    </div>

                    <Link className="btn btn-primary" to={{

                        pathname : '/edit',
                        state : {
                            profile
                        }
                    }}>Edit</Link>

                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {

    return{

        message : state.messages,
        friends : state.firebase.profile.friends || state.persons,
        profile : state.firebase.profile,
        uid : state.firebase.auth.uid

    }

}

function mapDispatchToProps(dispatch) {

    return{

        update : bindActionCreators(updateUser,dispatch)

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
