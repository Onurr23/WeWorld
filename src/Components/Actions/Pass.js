import React,{Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {confirm} from "../../Redux/Actions/UserActions";
import "../../Style/Home.css"

class Pass extends Component{

    pass=()=>{

        let newLookAt  = this.props.lookedAt;

        newLookAt = newLookAt + 1;

        this.props.confirmed(0,newLookAt);

    }

    render() {
        return (
            <div>
                <button className="pass" onClick={this.pass}><i className="fas fa-times fa-2x"></i></button>
            </div>
        );
    }

}

function mapStateToProps(state) {

    return{

        lookedAt : state.firebase.profile.lookAt,
        passed : state.firebase.profile.passed

    }

}

function mapDispatchToProps(dispatch) {

    return{

        confirmed : bindActionCreators(confirm,dispatch)

    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection : 'users'}
    ]))(Pass)
