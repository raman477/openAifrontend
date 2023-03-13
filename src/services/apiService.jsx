import axios from "axios"

const base_api_url='http://localhost:8000/api/'
// const base_api_url='https://1a79-122-173-24-92.in.ngrok.io/api/
export const getUnidaysTempToken=(payload)=>{
    return axios.post('https://account.myunidays.com/oauth/token',payload)
}

export const getUnidaysUserInfo=(token)=>{
    return axios.get("https://account.myunidays.com/oauth/userinfo",{
        headers:{
            "Authorization":"Bearer "+token
        }
    })
}

export const userSignup=(payload)=>{
    return axios.post(base_api_url + 'signup/', payload)
}

export const userLogin=(payload)=>{
    return axios.post(base_api_url + 'login/', payload)
}

export const socialLogin=(payload)=>{
    return axios.post(base_api_url + 'social-login/', payload)
}

export const getContent=(payload)=>{
    return axios.post(base_api_url + 'text-gen/', payload)
}

export const get_sub_packages=()=>{
    return axios.get(base_api_url+"get_packs")
}

export const createSubscriptionForUser=(payload)=>{
    return axios.post(base_api_url+"make_payment/",payload)
}