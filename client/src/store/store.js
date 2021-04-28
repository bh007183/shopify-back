import {combineReducers} from "redux"
import imageReducer from "./imageSlice"
import userReducer from "./userSlice"

export default combineReducers({
    User: userReducer,
    Image: imageReducer
})