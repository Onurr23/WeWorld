import {combineReducers} from "redux";
import PersonReducer from "./PersonReducer";
import MessageReducer from "./MessageReducer";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import MatchReducer from "./MatchReducer";
import UserReducer from "./UserReducer";


const rootReducer = combineReducers({

    persons : PersonReducer,
    firebase : firebaseReducer,
    firestore : firestoreReducer,
    messages : MessageReducer,
    match : MatchReducer,
    userMsg : UserReducer



})

export default rootReducer;
