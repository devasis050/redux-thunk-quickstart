

import {UPDATE_USER} from '../actionTypes'

const userReducer = (state = [], action) => {
    if(action.type = UPDATE_USER) {
        return action.payload ? action.payload : state; // action.payload = [users]
    }
    return state;
}

export default userReducer;