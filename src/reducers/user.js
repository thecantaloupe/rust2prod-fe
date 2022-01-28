import { CREATE2, GETALL2, UPDATE2, DELETE2 } from "../constants/actionTypes.js";

const userReducer =  (users = [], action) => {
    switch (action.type) {
        case GETALL2:
            return action.payload;
        case CREATE2:
            return [...users, action.payload];
        case UPDATE2:
            return users.map((user)=>user._id===action.payload._id ? action.payload : user);
        case DELETE2:
            return users.filter((user) => user._id !== action.payload);
        default:
            return users;
    }
}

export default userReducer;