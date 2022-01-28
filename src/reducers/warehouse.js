import { CREATE, GETALL, UPDATE, DELETE } from "../constants/actionTypes.js";

const warehouseReducer =  (warehouses = [], action) => {
    switch (action.type) {
        case GETALL:
            return action.payload;
        case CREATE:
            return [...warehouses, action.payload];
        case UPDATE:
            return warehouses.map((warehouse)=>warehouse._id===action.payload._id ? action.payload : warehouse);
        case DELETE:
            return warehouses.filter((warehouse) => warehouse._id !== action.payload);
        default:
            return warehouses;
    }
}

export default warehouseReducer;