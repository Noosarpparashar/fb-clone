import React from 'react'
import './Login.css'
import {auth, provider} from "./firebase"
import { actionTypes } from './reducer';
import {useStateValue} from "./StateProvider"

function Login() {
    const [state,dispatch]=useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
            console.log(result)
        }).catch((error)=>alert(error.mesage))
    }
    return (
        <div className="Login ">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" className="logoImage"/>
                <img src="https://exchange4media.gumlet.io/news-photo/100046.facebook.jpg?format=webp&w=400&dpr=2.6" className="logoName"/>

            </div>
            <button type="submit" onClick={signIn}> SignIn</button>
            
        </div>
    )
}

export default Login
