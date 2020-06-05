import CentralStore from "./CentralStore";

export function PersonReducer(state = CentralStore.persons,action){

    if(action.type === "GET_PERSONS" ){

        return action.payload

    }else{

        return state;

    }

}

export default PersonReducer;
