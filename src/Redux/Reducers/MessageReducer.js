import CentralStore from "./CentralStore";

export function MessageReducer(state= CentralStore.message,action) {

    if(action.type === 'SIGN_IN_ERROR'){

        return action.payload;

    }else if(action.type === 'SIGN_UP_ERROR'){

        return action.payload;

    }else{

        return state;

    }

}

export default MessageReducer;
