import CentralStore from "./CentralStore";

export function UserReducer(state = CentralStore.message,action) {

    if(action.payload === 'UPDATED_USER'){

        return action.payload;

    }else {

        return state;

    }

}
export default UserReducer;
