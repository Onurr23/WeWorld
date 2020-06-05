import React,{Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import match from "../../Redux/Actions/MatchActions";
import {bindActionCreators} from "redux";
import {matchUser} from "../../Redux/Actions/UserActions";


class Matched extends Component{

    render() {

        if(!this.props.matched) return <Redirect to="/home" />

        return (
            <div>


               <h1>MATCHED !</h1>

                <button onClick={()=> {
                    this.props.history.goBack();
                    this.props.match(false);
                }}> Go Back</button>


            </div>
        );
    }

}
function mapStateToProps(state) {


    return{

        matched: state.match,

    }

}

function mapDispatchToProps(dispatch) {

    return{

        match : bindActionCreators(match,dispatch),


    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Matched);
