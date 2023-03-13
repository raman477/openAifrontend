import { useEffect, useState } from "react"
import appContext from "./globalContext"
import jwt_decode from "jwt-decode";
import { socialLogin } from "../services/apiService";
import { toast } from "react-toastify";

import { useNavigate } from "react-router";
import HomePage from "../components/Home/home";


const ContextState = (props) => {
    const [token, setToken] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [signinModal, setSigninModal] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
   
    // const handleCredentialResponse = (response) => {
    //     let data = jwt_decode(response.credential);
    //     let payload={
    //         "sub_id":data.sub,
    //         "social_acc":"Google",
    //         "first_name":data.given_name,
    //         "last_name":data.family_name,
    //         "email":data.email
    //     }
    //     socialLogin(payload).then(response=>{
    //         if(response.status===200){
    //             setToken(response.data.data.token)
    //             localStorage.setItem('token',response.data.data.token)
    //             setEmail(response.data.data.email)
    //             localStorage.setItem('email',response.data.data.email)
    //             setFirstName(response.data.data.first_name)
    //             localStorage.setItem('first_name',response.data.data.first_name)
    //             setLastName(response.data.data.last_name)
    //             localStorage.setItem('last_name',response.data.data.last_name)
    //             // toast.success("You are logged in successfully.")
    //             return <HomePage/>
    //         }
    //     }).catch(err=>{
    //         toast.error(err.response.data.message)
    //     })
       
    // }
    const value = {
        token, setToken,
        email, setEmail,
        firstName, setFirstName,
        lastName, setLastName,
        signinModal, setSigninModal,
        isLoaded, setIsLoaded,
        // handleCredentialResponse
    }

    useEffect(() => {
        setToken(localStorage.getItem('token'))
        setEmail(localStorage.getItem('email'))
        setFirstName(localStorage.getItem("first_name"))
        setLastName(localStorage.getItem('last_name'))
    }, [])

    return (
        <appContext.Provider value={value}>
            {props.children}
        </appContext.Provider>
    )
}

export default ContextState;