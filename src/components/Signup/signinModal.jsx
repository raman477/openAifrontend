import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import appContext from '../../context/globalContext';
import Modal from 'react-bootstrap/Modal';
import jwt_decode from "jwt-decode";
import { Helmet } from "react-helmet";
import { socialLogin } from "../../services/apiService";


const SigninModal = () => {
    let navigate = useNavigate();
    const divRef = useRef(null);
    const [isCalled, setIsCalled] = useState(false)
    const contextData = useContext(appContext);
    function signUpHandle() {
        contextData.setSigninModal(false)
        navigate('/signup')
    }
    // const handleCredentialResponse = (response) => {
    //     setIsCalled(true)
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
    //             contextData.setToken(response.data.data.token)
    //             localStorage.setItem('token',response.data.data.token)
    //             contextData.setEmail(response.data.data.email)
    //             localStorage.setItem('email',response.data.data.email)
    //             contextData.setFirstName(response.data.data.first_name)
    //             localStorage.setItem('')
    //         }
    //     })
       
    // }


    // useEffect(() => {
    //     console.log('effec', divRef.current)
    //     if (divRef.current) {

    //         window.google.accounts.id.initialize({
    //             client_id: "117870430142-l3dkoqvevkl5td3ukai8eloc05gel1a9.apps.googleusercontent.com",
    //             callback: handleCredentialResponse
    //         });

    //         window?.google?.accounts.id.renderButton(
    //             document.getElementById('signUpDiv'),
    //             { theme: "outline", size: "large" }  // customization attributes
    //         );
    //         window.google.accounts.id.prompt(); // also display the One Tap dialog


    //     }

    // }, [contextData.signinModal]);

    return (
        <>
            <Helmet><script src="https://accounts.google.com/gsi/client" async defer></script></Helmet>
            <Modal show={contextData.signinModal} onHide={() => contextData.setSigninModal(false)}>
                <Modal.Header closeButton>
                    <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                    <a onClick={() => signUpHandle()}>Sign Up instead?</a>
                </Modal.Header>
                <Modal.Body>
                    <form className="sign-in-form sign-up-form remove-excess">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" placeholder="henryberry801@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Password" />
                        </div>
                        <button className="btn-primary">Sign in</button>
                    </form>
                    <div className="singn-up-or-text">
                        <p>OR</p>
                    </div>
                    <div className="google-sign sign-up-form">
                        <div id="signUpDiv" ref={divRef} data-text="signup_with"></div>
                    </div>
                    <p className="text-center">By signing up you agree with the Terms of Service</p>
                </Modal.Body>
            </Modal>





            {/* <div className="modal fade sign-up-form-top" id={contextData.signinModal === true ? "exampleModal" : ''} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                            <a onClick={() => signUpHandle()}>Sign Up instead?</a>
                        </div>
                        <div className="modal-body">
                            <form className="sign-in-form sign-up-form remove-excess">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" placeholder="henryberry801@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <button className="btn-primary">Sign in</button>
                            </form>
                            <div className="singn-up-or-text">
                                <p>OR</p>
                            </div>
                            <div className="google-sign sign-up-form">
                                <div id="signUpDiv" ref={divRef} data-text="signup_with"></div>
                            </div>
                            <p className="text-center">By signing up you agree with the Terms of Service</p>
                        </div>
                    </div>
                </div>
            </div > */}

            {/* <div id="g_id_onload"
                                    data-client_id="117870430142-l3dkoqvevkl5td3ukai8eloc05gel1a9.apps.googleusercontent.com"
                                    data-context="signin"
                                    data-ux_mode="popup"
                                    // data-login_uri="https://getabracadabra.space/"
                                    data-callback={handleCredentialResponse}>
                                </div>

                                <div className="g_id_signin"
                                    data-type="standard"
                                    data-shape="rectangular"
                                    data-theme="outline"
                                    data-text="signin_with"
                                    data-size="large"
                                    data-logo_alignment="left">
                                </div> */}

            {/* <div id="g_id_onload"
                                    data-client_id="117870430142-l3dkoqvevkl5td3ukai8eloc05gel1a9.apps.googleusercontent.com"
                                    data-context="signin"
                                    data-ux_mode="popup"
                                    data-callback='handleCredentialResponse'
                                    data-auto_prompt="false">
                                </div>

                                <div className="g_id_signin"
                                    data-type="standard"
                                    data-shape="rectangular"
                                    data-theme="outline"
                                    data-text="signin_with"
                                    data-size="large"
                                    data-logo_alignment="left">
                                </div> */}

            {/* <div className="inner-google">
                                    <a href="#"><img src={require('../../images/google.png')} />Sign in with Google</a>
                                </div> */}
        </>
    )
}

export default SigninModal