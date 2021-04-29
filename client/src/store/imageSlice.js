import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"


const slice = createSlice({
    name: "Image",
    initialState:{
        publicImage:[]

    },
    reducers:{
        setImage: (Image, action)=>{
            Image.publicImage = action.payload
        }
    }
})
export const {setImage} = slice.actions
export default slice.reducer

export const getPublic = () => apiCallBegan({
    url: "http://localhost:3001/api/getpublic",
    onSuccess: setImage.type

})