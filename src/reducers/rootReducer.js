import UserReducer from "./UserReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    userReducer: UserReducer,
})

export default rootReducer;