import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"


const slice = createSlice({
    name: "User",
    initialState:{
        CurrentUser: '',
        onError: []

    },
    reducers:{
        setUser: (User, action)=>{
            localStorage.setItem("token", action.payload.token)
        },
        setError: (User, action)=>{
            User.onError = [action.payload.response.data]
            
        }
    }
})
export const {setUser, setError} = slice.actions
export default slice.reducer

export const loginApi = (data) => apiCallBegan({
    url: "http://localhost:3001/login",
    method: "POST",
    data: data,
    onSuccess: setUser.type,
    onError: setError.type
    
})