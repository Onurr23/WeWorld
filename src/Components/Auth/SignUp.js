import React, { Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {signup} from "../../Redux/Actions/AuthActions";
import {Redirect} from "react-router-dom";

class SignUp extends Component {

    state={

        email : '',
        password : '',
        confirm : '',
        name : '',
        age : '',
        image :'',
        message : '',
        description : '',
        country : ''

    }

    handleChange=(e)=>{

        this.setState({

            [e.target.name] : e.target.value

        })


    }

    submitHandler=(e)=>{

        e.preventDefault();



        if(this.state.password === this.state.confirm){

            this.props.signUp(this.state)


        }else{

            this.setState({
                message : 'Passwords Are Not Matching ! '
            })

            setTimeout(()=>{


                this.setState({
                    message : ''
                })

            },3000)

        }

    }

    render() {

        if(this.props.auth) return <Redirect to='/home' />

        let message = this.props.message;

        return (
            <div>

                <form onSubmit={this.submitHandler}>

                    <input type="email" name="email" onChange={this.handleChange} placeholder="Your E-mail"/>
                    <input type="password" name="password" onChange={this.handleChange} placeholder="Your Password"/>
                    <input type="password" name="confirm" onChange={this.handleChange} placeholder="Confirm Your Password"/>
                    <input type="text" name="name" onChange={this.handleChange} placeholder="Your Name"/>
                    <input type="text" name="description" onChange={this.handleChange} placeholder="Description"/>
                    <input type="text" name="country" onChange={this.handleChange} placeholder="Country"/>
                    <input type="text" name="age" onChange={this.handleChange} placeholder="Your Age"/>
                    <input type="text" name="img" onChange={this.handleChange} placeholder="Image URL"/>
                    <img src={this.state.img}  alt=""/>

                    {this.state.message !== '' ?  <div><p>{this.state.message}</p></div> : null} {message !== null ?  <div><p>{message}</p></div> : null}

                    <button type="submit">Sign Up</button>
                    <p>You Already Have An Account ? </p> <button onClick={()=>{this.props.history.push('/')}}>Sign In</button>

                </form>

            </div>
        )
    }
}

function mapStateToProps(state) {

    return{

        auth : state.firebase.auth.uid,
        message : state.messages

    }

}

function mapDispatchToProps(dispatch) {

    return {

        signUp : bindActionCreators(signup,dispatch)

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
