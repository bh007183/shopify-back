import React, {useEffect, useState} from 'react'
import "./style.css"
import Grid from "@material-ui/core/Grid"
import {useSelector, useDispatch} from "react-redux"
import {getPublic} from "../store/imageSlice"

export default function Main() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPublic())
        
    }, [])
    
    const publicImages = useSelector(state => state.store )


    console.log(publicImages)

    return (
        <Grid container spacing={2} direction="row">


        </Grid>
    )
}
