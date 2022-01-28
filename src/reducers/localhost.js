import { LOCALSTORE } from '../constants/actionTypes'
// custom storage to localhost
const localReducer = (state={ assemble: null }, action) => {
    switch(action.type) {
        case LOCALSTORE:
            localStorage.setItem('localstore', JSON.stringify([...action?.data]));
            return {...state, assemble: action?.data};
        // case LOGOUT:
        //     localStorage.clear()
        //     return {...state, bookmark: null};
        default:
            return state;
    }
}

export default localReducer;