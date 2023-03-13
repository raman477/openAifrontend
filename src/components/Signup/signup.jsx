import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { userSignup } from "../../services/apiService";
import jwt_decode from "jwt-decode";
import { Helmet } from "react-helmet";
import appContext from "../../context/globalContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const contextData = useContext(appContext);
    const navigate=useNavigate()
    const divRef = useRef(null);
    const onSubmit = (data) => {
        console.log(data);
        let payload = {
            "first_name": data.fname,
            "last_name": data.lname,
            "email": data.email,
            "password": data.password,
        }

        userSignup(payload).then(response => {
            // console.log(response, 'hsbadshb')
            if (response.status === 201) {
                console.log('ress',response.data);
                contextData.setToken(response.data.token)
                localStorage.setItem('token',response.data.token)
                contextData.setEmail(response.data.email)
                localStorage.setItem('email',response.data.email)
                contextData.setFirstName(response.data.first_name)
                localStorage.setItem('first_name',response.data.first_name)
                contextData.setLastName(response.data.last_name)
                localStorage.setItem('last_name',response.data.last_name)
                toast.success("Your account is created successfully.")
                navigate('/all-packages',{state:{email:response.data.email}})
            }
        }).catch(err => {
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
    }, [contextData.isLoaded])
    return (
    <>
        <Helmet><script src="https://accounts.google.com/gsi/client" async defer></script></Helmet>
        <section className="sin-in-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div className="right-signin bg-gradients">
                            <div className="inner-signin">
                                <h2>Hello, Friends!</h2>
                                <p>Fill up personal information and start journey with us...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12">
                        <div className="left-signin">
                            <h1>Create Your Account</h1>
                            <form className="signin" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="signin-input">
                                            <label>First Name</label>
                                            <input type="text" placeholder="First Name" {...register("fname", { required: true, maxLength: 20, })} />
                                            {errors.fname && errors.fname.type === "required" && <span className='input-error'>First Name is required</span>}
                                            {errors.fname && errors.fname.type === "maxLength" && <span className='input-error'>Max length exceeded</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="signin-input">
                                            <label>Last Name</label>
                                            <input type="text" placeholder="Last Name"{...register("lname", { required: true, maxLength: 20, })} />
                                            {errors.lname && errors.lname.type === "required" && <span className='input-error'>Last Name is required</span>}
                                            {errors.lname && errors.lname.type === "maxLength" && <span className='input-error'>Max length exceeded</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="signin-input">
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
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="signin-input">
                                            <label>Password</label>
                                            <input type="pasword" placeholder="Password" {...register("password", { required: true, minLength: 4, maxLength: 8 })} />
                                            {errors.password && errors.password.type === "required" && <span className='input-error'>Password is required</span>}
                                            {errors.password && errors.password.type === "minLength" && <span className='input-error'>Password should be between 4 to 8 digits</span>}
                                            {errors.password && errors.password.type === "maxLength" && <span className='input-error'>Password should be between 4 to 8 digits</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="signin-input">
                                            <label>Confirm Password</label>
                                            <input type="pasword" placeholder="Password" {...register("confirmPassword", { required: true, minLength: 4, maxLength: 8 })} />
                                            {errors.confirmPassword && errors.confirmPassword.type === "required" && <span className='input-error'>Password is required</span>}
                                            {errors.confirmPassword && errors.confirmPassword.type === "minLength" && <span className='input-error'>Password should be between 4 to 8 digits</span>}
                                            {errors.confirmPassword && errors.confirmPassword.type === "maxLength" && <span className='input-error'>Password should be between 4 to 8 digits</span>}
                                        </div>
                                    </div>
                                </div>
                                <button className="btn-primary" type="submit">Sign Up</button>
                            </form>
                            <div className="singn-up-or-text margin_btm my-4">
                                <p>OR</p>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div id="signUpDiv" ref={divRef} data-text="signup_with"></div>
                                </div>
                                {/* <div className="col-md-6 text-center">
                                    <a href="https://account.myunidays.com/oauth/authorize?client_id=APAADN6XJGFLIWRVIBVORCEGCD3MNBN1LFEOGJMXMU4&redirect_uri=https://openai.internetter.in/signup&response_type=code&state=xyz&code_challenge_method=S256&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&scope='openid member contact email verification'"><img className="unidays_logo2" src='https://cdn.unidays.world/assets/buttons/login-regular-large.png' /></a>
                                </div> */}
                            </div> 
                            {/* <div className="forgot-signin">
                            <h6>Remember me</h6>
                            <h6>Forgot Password</h6>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default SignUp;