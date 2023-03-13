import React, { useContext, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet';
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getUnidaysTempToken, getUnidaysUserInfo, socialLogin, userLogin } from '../../services/apiService';
import appContext from '../../context/globalContext';
import { toast } from 'react-toastify';

const Signin = () => {
    let navigate = useNavigate()
    const [query] = useSearchParams()
    const divRef = useRef(null);
    const contextData = useContext(appContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        userLogin(data).then(response => {
            if (response.status === 200) {
                contextData.setToken(response.data.data.token)
                localStorage.setItem('token', response.data.data.token)
                contextData.setEmail(response.data.data.email)
                localStorage.setItem('email', response.data.data.email)
                contextData.setFirstName(response.data.data.first_name)
                localStorage.setItem('first_name', response.data.data.first_name)
                contextData.setLastName(response.data.data.last_name)
                localStorage.setItem('last_name', response.data.data.last_name)
                toast.success("You are logged in successfully.")
                navigate('/home')
            }
        }).catch(err=>{
            toast.error(err.response.data.message)
        })
    }

    useEffect(() => {
        console.log('hi dom');
        if (contextData.isLoaded) {
            window?.google?.accounts.id.renderButton(
                divRef.current,
                { theme: "outline", size: "large",text:"continue_with" }  // customization attributes
            );
            window?.google?.accounts.id.prompt(); // also display the One Tap dialog
        }

        if (query.get('code')) {
            const payload = new FormData()
            payload.append("client_id", "APAADN6XJGFLIWRVIBVORCEGCD3MNBN1LFEOGJMXMU4")
            payload.append("client_secret", "fcluuR4QMx06tyvXj1eJQQaG2XFGbkrc8B-49S2E8N1_H_97r_42uzl-Tzw-bCkP8Q1S8N2TsAB-ZjpowSJE5XcUnFIgjmhYEkJK1ATBZ4PVdUZj6tjFI6Rrv0ZGeXf4qPZXPhC2lxphsisxtLM93S6q_pkA3ZH0oIoN2UCMbE0")
            payload.append("code", query.get('code'))
            payload.append("code_verifier", "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk")
            payload.append("grant_type", "authorization_code")
            payload.append("redirect_uri", "https://getabracadabra.space/signin")

            getUnidaysTempToken(payload).then(res => {
                if (res.status === 200) {
                    getUnidaysUserInfo(res.data.access_token).then(response => {
                        if (response.status===200) {
                            console.log(response.data.data);
                            // contextData.setToken(response.data.data.token)
                            // localStorage.setItem('token', response.data.data.token)
                            // contextData.setEmail(response.data.data.email)
                            // localStorage.setItem('email', response.data.data.email)
                            // contextData.setFirstName(response.data.data.first_name)
                            // localStorage.setItem('first_name', response.data.data.first_name)
                            // contextData.setLastName(response.data.data.last_name)
                            // localStorage.setItem('last_name', response.data.data.last_name)
                        }
                    })
                }
            })
        }

    }, [contextData.isLoaded])
    return (
        <section className="sign-in">
            <Helmet><script src="https://accounts.google.com/gsi/client" async defer></script></Helmet>
            <div className="row m-0 h-100">
                <div className="col-lg-6 col-md-6 col-sm-12 bg-gradients signup_left">
                    <div className="left-sign-box  text-white">
                        <h1 className="text-white">Follow your fellow students & save 10+ hours with Abracadabra</h1>
                        <div className="sign-in-images">
                            <div>
                                <img src={require('../../images/sign-in-clients.jpg')} />
                            </div>
                            <div className="inner-img">
                                <img src={require('../../images/sign-in-clients.jpg')} />
                            </div>
                            <div className="inner-img">
                                <img src={require('../../images/sign-in-clients.jpg')} />
                            </div>
                            <div className="inner-img">
                                <img src={require('../../images/sign-in-clients.jpg')} />
                            </div>
                            <div className="inner-img">
                                <img src={require('../../images/sign-in-clients.jpg')} />
                            </div>
                            <p>+1000s more use Abracadabra </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-center bg-white">
                    <div className="sign-in-form">
                        <div className="text-center">
                            <h2>Sign In</h2>
                        </div>

                        <div className="google-sign">
                            <div className="google-sign sign-up-form">
                                <div id="signUpDiv" ref={divRef} data-text="signup_with"></div>
                            </div>
                            {/* <div className="inner-google">
                                <a href="#"><img src={require('../../images/google.png')} />Sign in with Google</a>
                            </div> */}
                            <div className="inner-google unidays_logo">
                                <a href="https://account.myunidays.com/oauth/authorize?client_id=APAADN6XJGFLIWRVIBVORCEGCD3MNBN1LFEOGJMXMU4&redirect_uri=https://openai.internetter.in/signup&response_type=code&state=xyz&code_challenge_method=S256&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&scope='openid member contact email verification'"><img src='https://cdn.unidays.world/assets/buttons/login-regular-large.png' /></a>
                            </div>
                            <span className="border-or">OR</span>
                        </div>
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" placeholder="Email" {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Please enter a valid email',
                                    },
                                })} />
                                {errors.email && errors.email.type === "required" && <span className='input-error'>Email is required</span>}
                                {errors.email && errors.email.type === "pattern" && <span className='input-error'>{errors.email.message}</span>}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="pasword" placeholder="Password" {...register("password", { required: true, minLength: 4, maxLength: 8 })} />
                                {errors.password && errors.password.type === "required" && <span className='input-error'>Password is required</span>}
                                {errors.password && errors.password.type === "minLength" && <span className='input-error'>Password should be between 4 to 8 digits</span>}
                                {errors.password && errors.password.type === "maxLength" && <span className='input-error'>Password should be between 4 to 8 digits</span>}
                            </div>
                            <p>By signing in you agree with the Terms of Service</p>
                            <button className="btn-primary" type="submit" >Sign In</button>
                            <a className="last-link" onClick={() => navigate('/signup')}>Sign up instead?</a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signin;