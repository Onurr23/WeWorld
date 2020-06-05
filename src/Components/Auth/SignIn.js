import React, { Component } from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {login} from "../../Redux/Actions/AuthActions";
import {bindActionCreators} from "redux";


class SignIn extends Component {

    state ={

        email : '',
        password : ''

    }

    changeHandler=(e)=>{

    this.setState({
        [e.target.name]  : e.target.value
    })

    }

    submitHandler=(e)=>{

        e.preventDefault();

        this.props.login(this.state);

    }

    render() {

        if(this.props.auth) return <Redirect to="/home" />

        let message = this.props.messages

        return (
            <div>

                <form onSubmit={this.submitHandler}>

                    <input type="text" name="email" placeholder="Email Adress" onChange={this.changeHandler} />
                    <input type="password" name="password" placeholder="Password" onChange={this.changeHandler} />

                    <div>{message ? <p>{message}</p> : null }   </div>

                    <button type="submit">Sign In</button>

                    <p>Don't You Have A Account ? </p> <button onClick={()=>this.props.history.push('signup')}>Sign Up</button>

                </form>

            </div>
        )
    }
}

function mapStateToProps(state) {

    return{

        auth : state.firebase.auth.uid,
        messages : state.messages

    }
}

function mapDispatchToProps(dispatch) {

    return{

        login : bindActionCreators(login,dispatch)

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)


