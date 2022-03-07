import React from 'react';
import {SET_USERS, ADD_USER, DELETE_USER, EDIT_USER, UPDATE_USER} from '../constant/UserConstants'

const initialState = {
    users: [],
    editRow: null,
}

const UserReducer = function(state=initialState, action) {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            }

        case ADD_USER:
            return {
                ...state,
                users: [action.payload, ...state.users]
            }

        case DELETE_USER:
            const newUsers = state.users.filter(user => user.id !== action.payload)
            return {
                ...state,
                users: newUsers
            }

        case EDIT_USER:
            return {
                ...state,
                editRow: action.payload
            }

        case UPDATE_USER:
            const updatedUsers = state.users.map(user => {
                return user.id === state.editRow ? {...action.payload, id:state.editRow} : user
            })
            return {
                ...state,
                users: updatedUsers,
                editRow: null,
            }

        default:
            return state
    }
}

export default UserReducer;