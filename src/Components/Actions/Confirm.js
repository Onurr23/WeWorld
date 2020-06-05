import React,{Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {confirm, matchUser} from "../../Redux/Actions/UserActions";
import match from "../../Redux/Actions/MatchActions";
import "../../Style/Home.css"


class Confirm extends Component{

    confirm=()=>{

        let requests = this.props.user.confirmed;



       requests.filter(c=>{

           if(c.id === this.props.uid){

               this.props.match(true);
               this.props.matched(c);


               let friends = this.props.profile.friends;
               friends.push(this.props.user);

               let friendsTwo =  JSON.parse(JSON.stringify(this.props.user.friends))
               let newUser = JSON.parse(JSON.stringify(this.props.profile))
               friendsTwo.push(newUser)


               this.props.matchUser(friends,this.props.user.id,friendsTwo);


               this.props.history.push('/matched')

           }

        })

        let newLookAt  = this.props.lookedAt;
        let newAdded = this.props.added;

        newAdded.push(this.props.user)

        newLookAt = newLookAt + 1;

        this.props.confirmed(1,newLookAt,newAdded);

    }

    render() {
        return (
            <div>
                <button className="confirm" onClick={this.confirm}><i className="far fa-check-circle fa-2x"></i></button>
            </div>
        );
    }

}

function mapStateToProps(state) {


    return{

        lookedAt : state.firebase.profile.lookAt,
        added : state.firebase.profile.confirmed,
        uid : state.firebase.auth.uid,
        profile : state.firebase.profile

    }

}

function mapDispatchToProps(dispatch) {


    return{

        confirmed : bindActionCreators(confirm,dispatch),
        match : bindActionCreators(match,dispatch),
        matched : bindActionCreators(match,dispatch),
        matchUser : bindActionCreators(matchUser,dispatch)

    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection : 'users'}
    ]))(Confirm)
