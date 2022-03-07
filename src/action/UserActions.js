import {SET_USERS, ADD_USER, DELETE_USER, EDIT_USER, UPDATE_USER} from '../constant/UserConstants'
import UserServices from '../services/UserServices'


export const initialSetUsers = () => {
    return async (dispatch) => {
        let res = await UserServices.getUsers();
        dispatch(setUsers(res))
    }
}

export const setUsers = (data) => {
    return {
        type: SET_USERS,
        payload: data,
    }
}

export const addUserAction = (data) => {
    return {
        type: ADD_USER,
        payload: data,
    }
}

export const deleteUserAction = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}

export const editUserAction = (id) => {
    return {
        type: EDIT_USER,
        payload: id
    }
}

export const updateUserAction = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}