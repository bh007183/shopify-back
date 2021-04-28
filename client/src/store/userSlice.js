import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"


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

export const loginApi = (data) => apiCallBegan({
    url: "http://localhost:3001/login",
    method: "POST",
    data: data,
    onSuccess: setUser.type
})