import { combineReducers } from "redux";

import auth from './auth';
import local from './localhost';
import user from './user'
import warehouses from "./warehouse";

export const reducers = combineReducers({ auth , local, user, warehouses });