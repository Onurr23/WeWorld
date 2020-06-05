import React, {Component} from 'react';
import {connect} from "react-redux";
class SendMessage extends Component{

    state = {

        to : this.props.uid,
        date : new Date()

    }

    render() {
        return (
            <div>
                <div className="messages">


                </div>
                <textarea name="" id="" cols="30" rows="10">


                </textarea>
            </div>
        );
    }
}

function mapStateToProps(state) {

    console.log(state)

    return{

        uid : state.firebase.auth.uid


   }
}

function mapDispatchToProps(dispatch) {

    return{


    }

}

export default connect(mapStateToProps,mapDispatchToProps)(SendMessage);
