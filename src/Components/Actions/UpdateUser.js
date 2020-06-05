import React,{Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActions from "../../Redux/Actions/UserActions";

class UpdateUser extends Component{

    state = {

        image : this.props.location.state.profile.image,
        age : this.props.location.state.profile.age,
        name : this.props.location.state.profile.name,
        description : this.props.location.state.profile.description,
        country : this.props.location.state.profile.country

    }

    updateUser=(e)=>{

        this.setState({

            [e.target.name] : e.target.value

        })

    }
    update=()=>{

            this.props.update(this.state);
            this.props.history.push('/profile')

    }

    render() {
        return (
            <div>
                <input type="text" name="image" value={this.state.image} onChange={this.updateUser} />
                <br/>
                <img src={this.state.image} alt=""/>
                <br/>
                Age
                <input type="text" name="age" value={this.state.age} onChange={this.updateUser}/>
                <br/>
                Name <input type="text" name="name" value={this.state.name} onChange={this.updateUser} />
                <br/>
                Country <input type="text" name="country" value={this.state.country} onChange={this.updateUser} />
                <br/>
                Description <input type="text" name="description" value={this.state.description} onChange={this.updateUser} />

                <button onClick={this.update} >Save</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {

    return{

        update : bindActionCreators(UserActions.updateUser,dispatch)

    }

}

export default connect(null,mapDispatchToProps)(UpdateUser);
