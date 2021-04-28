import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"
import reducer from "./reducer"

const slice = createSlice({
    name: "Image",
    initialState:{
        setImage:[]

    },
    reducers:{
        setImage: (User, action)=>{
            User.setImage = action.payload
        }
    }
})
export const {setImage} = slice.actions
export default slice.reducer