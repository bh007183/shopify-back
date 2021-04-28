import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"
import reducer from "./reducer"

const slice = createSlice({
    name: "User",
    initialState:{
        CurrentUser: ''

    },
    reducers:{
        setUser: (User, action)=>{
            localStorage.setItem("UserName", action.payload.user)
        }
    }
})
export const {setUser} = slice.actions
export default slice.reducer