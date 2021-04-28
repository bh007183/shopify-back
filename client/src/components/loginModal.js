import React, {useState} from "react"
import Grid from "@material-ui/core/Grid"
import { useDispatch } from "react-redux";
import {loginApi} from "../store/userSlice"

export default function LoginModal() {
    const dispatch = useDispatch()

    const [login, setLogin] = useState({
        email: "",
        password: ""
      })

    const onChange = (event) => {
        const name  = event.target.name
        const value = event.target.value
    
        setLogin({
          ...login, [name]: value
        })
      }
    
      const submitForm = () => {
        dispatch(loginApi(login))
        
      }
    
      
    
    return (
        <div className="loginModal" style={{contain: "content"}}>
          <br></br>
          <br></br>
          <br></br>
          <form onSubmit={submitForm}>
            <Grid container  spacing={2} direction="row">
              
            <Grid className="center" item xs={12}>
            <input onChange={onChange} value={login.email} name="email" placeholder="Email"></input>
            </Grid>
            <Grid className="center" item xs={12}>
            <input onChange={onChange} value={login.password} type="password" placeholder="Password" name="password"></input>
            </Grid>
            <Grid className="center" item xs={12}>
            <button  type="submit" >Enter</button>
            </Grid>
            </Grid>
          </form>
        </div>
    )
}
