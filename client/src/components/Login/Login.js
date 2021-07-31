import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { signIn, signUp } from "../../api/index";
import "./login.css";

export default function Login({ setuserId }) {
    const [userDetails, setuserDetails] = useState({ name: "", email: "", password: "" })
    const [isSignup, setisSignup] = useState(false)
    const history = useHistory()
    const signUpUser = async () => {
        try {
            const { data } = await signUp(userDetails)
            localStorage.setItem('musicPlayerUser', JSON.stringify({ data }))
            setuserId(data.result._id)
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    const loginUser = async () => {
        try {
            const { data } = await signIn(userDetails)
            localStorage.setItem('musicPlayerUser', JSON.stringify({ data }))
            setuserId(data.result._id)
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    const handleSignup = () => {
        setisSignup(!isSignup)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        isSignup ? signUpUser() : loginUser()
    }
    return (
        <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                {isSignup && <input type="text" name="name" placeholder="Name" onChange={(e) => setuserDetails({ ...userDetails, name: e.target.value })} />}
                <input type="text" name="email" placeholder="Email" onChange={(e) => setuserDetails({ ...userDetails, email: e.target.value })} />
                <input type="text" name="password" placeholder="Password" onChange={(e) => setuserDetails({ ...userDetails, password: e.target.value })} />
                <button type="submit">{isSignup ? "Register" : "Log In"}</button>
            </form>
            {isSignup ? <p>Already registered? <span onClick={handleSignup}>Log in</span></p> : <p>New here? <span onClick={handleSignup}>Register Now</span></p>}

        </div>
    )
}
