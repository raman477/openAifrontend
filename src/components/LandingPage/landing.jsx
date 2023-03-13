import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUnidaysTempToken } from "../../services/apiService";
import jwt_decode from "jwt-decode";
import { Helmet } from "react-helmet";
import SigninModal from "../Signup/signinModal";
import appContext from "../../context/globalContext";

const Landing = () => {
    let navigate = useNavigate();
    const [isCalled, setIsCalled] = useState(false)
    const divRef = useRef(null);
    const contextData = useContext(appContext);
  console.log("landing");


    

    return (
        <>
            <Helmet><script src="https://accounts.google.com/gsi/client" async defer></script></Helmet>
            <SigninModal show={contextData.signinModal} onHide={() => contextData.setSigninModal(false)}/>

            {/* <div className="modal fade sign-up-form-top" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                            <a onClick={() => navigate('/signup')}>Sign Up instead?</a>
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

            <section className="upper-text-free-sign">
                <div className="container">
                    <div className="text-center">
                        <h1>abracadabra</h1>
                        <h5>Upload your notes. get an Ai-generated essay</h5>
                        <button type="submit" className="btn-primary" onClick={() => navigate('/signup')}>Sign Up (Free)</button>
                    </div>
                </div>
            </section>


            <section className="essay-notes">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <form className="">
                                <div className="form-group">
                                    <label>Essay Question</label>
                                    <input disabled type="text" placeholder="Explain the effects of the Cold War on modern global politics" />
                                </div>
                                <div className="form-group">
                                    <label>Tone of voice</label>
                                    <input disabled type="text" placeholder="Creative, factual...." />
                                </div>
                                <div className="form-group">
                                    <label>Essay Notes</label>
                                    <textarea disabled className="form-control" id="textAreaExample1" rows="4" placeholder="Paste your notes here..."></textarea>
                                </div>
                                <a><button disabled type="submit" className="btn-primary">Compose <span>CMD + J</span></button></a>
                            </form>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="righ-notes-nner">
                                <p>The Cold War was a period of political and military tension between the United States
                                    and its allies on one side, and the Soviet Union and its allies on the other. It lasted from
                                    the end of World War II in 1945 until the collapse of the Soviet Union in 1991. The Cold
                                    War had a significant impact on modern day politics, both in terms of the political
                                    landscape and in terms of the way that countries interact with each other.
                                </p>
                                <p>
                                    One of the most significant effects of the Cold War on modern day politics is the spread
                                    of democracy. During the Cold War, the United States and its allies promoted
                                    democracy as a counter to the Soviet Union's communist government. This promotion
                                    of democracy was successful, as many countries that were previously under
                                    authoritarian or communist rule have now transitioned to democratic systems of
                                    government. The spread of democracy has had a positive impact on many parts of the
                                    world, as it has given people more power to shape their own destinies and has led to
                                    greater political stability.
                                </p>
                                <div className="complete-red">
                                    <p className="complete-toolip">Another effect of the Cold War on modern day politics is the emergence of international
                                        organizations and agreements.
                                        <div className="toolip-hover">
                                            <span className="left-border"></span>
                                            <h6>Incorrect Statement</h6>
                                            <p>The emergence of international agreements didn’t come until 1986, significantly after the end of the Cold War and was caused by other factors.</p>
                                        </div>
                                    </p> <p>During the Cold War, the United States and the Soviet
                                        Union were involved in a number of international organizations and agreements in an
                                        effort to reduce the risk of conflict and promote cooperation. These organizations and
                                        agreements, such as the United Nations and the North Atlantic Treaty Organization
                                        (NATO), continue to play a significant role in modern day politics and have helped to
                                        create a more stable and interconnected world.</p>
                                </div>
                                <p>
                                    The Cold War also had a significant impact on the way that countries interact with each
                                    other. During the Cold War, the United States and the Soviet
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="complete-3-col">
                                {/* <div className="compltete-button">
                                    <button type="submit" className="btn-primary">Account</button>
                                </div> */}
                                <div className="complete-box">
                                    <h5>81 (A)</h5>
                                    <h6>Overall Score</h6>
                                </div>
                                <div className="complete-box">
                                    <h5 className="text-danger">88%</h5>
                                    <h6>AI Generated (Re-write to avoid detection) </h6>
                                </div>
                                <div className="all-feed">
                                    <h6>All feedback</h6>
                                    <h5>Develop a more detailed prompt</h5>
                                    <p>3 suggestions</p>
                                </div>
                                <div className="complete-box">
                                    <p>What specific aspects of modern day politics do you want to focus on?</p>
                                </div>
                                <div className="complete-box">
                                    <p>Are there any specific examples or case studies that you want to include in your essay?</p>
                                </div>
                                <div className="complete-box">
                                    <p>Do you want to take a particular perspective or stance on the topic?</p>
                                </div>
                                <div className="all-feed">
                                    <h5>Essay Feedback</h5>
                                    <p>2 suggestions</p>
                                </div>
                                <div className="complete-box">
                                    <p>Expand upon your discussion of the effects of the Cold War on modern day politics.</p>
                                </div>
                                <div className="complete-box">
                                    <p>Include analysis and critical thinking in your essay. In addition to describing the effects of the Cold War, consider discussing the implications of these effects and how they have impacted global politics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Landing;