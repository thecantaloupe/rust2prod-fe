import * as api from '../api'
import { CREATE2, GETALL2, UPDATE2, DELETE2 } from '../constants/actionTypes'

export const getUser = () => async (dispatch) => {
    try {
        const {data} = await api.fetchUser()
        console.log("did a User dispatch get")
        dispatch({ type: GETALL2, payload: data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const createUser = (user) => async (dispatch) => {
    try {
        const urldata = new URLSearchParams(user).toString();
        const {data} = await api.createUser(urldata)

    dispatch({ type: CREATE2, payload: data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const updateUser = (id, user) => async (dispatch) => {
    try {
        const urldata = new URLSearchParams(user).toString();
        const {data} = await api.updateUser(id, urldata)

    dispatch({ type: UPDATE2, payload: data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id)
        console.log(id)
    dispatch({ type: DELETE2, payload: id})
    } catch (error) {
        console.log(error.message)
    }  
}