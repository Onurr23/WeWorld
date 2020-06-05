import CentralStore from "./CentralStore";

export function MatchReducer(state = CentralStore.isMatched,action) {

    if(action.type === 'MATCHED'){

        return action.payload;

    }else {

        return state;

    }

}

export default MatchReducer;
