import { useNavigate } from "react-router-dom"

const SureCancellation = () => {
    let navigate = useNavigate();
    return (
        <>
            <section className="Cancellation">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h3>Are You Sure? Downgrading will mean you lose access to key features</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="cancellation-inner">
                                <img src={require('../../images/icon-1.png')} />
                                <h4>Essay Writer</h4>
                                <p>Get access to the world’s best minds for help with your assignments. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="cancellation-inner">
                                <img src={require('../../images/icon-2.png')} />
                                <h4>Essay Grader</h4>
                                <p>See whether your essay needs more work and what grade you’ll likely get</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="cancellation-inner">
                                <img src={require('../../images/icon-3.png')} />
                                <h4>Essay Feedback</h4>
                                <p>Instantly see actionable insights on how to improve your essay</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="cancellation-inner">
                                <img src={require('../../images/icon-4.png')} />
                                <h4>Fact Checker</h4>
                                <p>Have confidence that your essay is as accurate as possible</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cancellation-buttons">
                <div className="container">
                    <button type="submit" className="btn-light" onClick={() => navigate('/cancellation-step2')}>Continue</button>
                    <button type="submit" className="btn-primary">Cancel</button>
                </div>
            </section>
        </>
    )
}

export default SureCancellation