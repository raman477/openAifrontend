import { useNavigate } from "react-router-dom";

const ReducedPrice = () => {
    let navigate = useNavigate();
    return (
        <>
            <section className="Reduced-price">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h3>Would you be interested in a reduced price? We’d miss you</h3>
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="Reduced-inner">
                                <img src={require('../../images/smile.png')} className="mx-auto" />
                                <h4>Reduced Price</h4>
                                <h5>£2.99 / month</h5>
                                <p>Keep access to all the features you have now:</p>
                                <ul className="p-0">
                                    <li><i className="fas fa-circle"> </i>Essay Writer</li>
                                    <li className="light-font"> <i className="fas fa-circle"></i>Essay Grader</li>
                                    <li className="light-font"> <i className="fas fa-circle"></i>Essay Feedback</li>
                                    <li className="light-font"> <i className="fas fa-circle"></i>Fact Checking</li>
                                </ul>
                                <button className="btn btn-primary" onClick={() => navigate('/cancellation-step3')}>Select</button>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="Reduced-inner">
                                <img src={require('../../images/sad.png')} className="mx-auto" />
                                <h4>Reduced Price</h4>
                                <h5>£2.99 / month</h5>
                                <p>Keep access to all the features you have now:</p>
                                <ul className="p-0">
                                    <li><i className="fas fa-circle"> </i>Essay Writer</li>
                                    <li className="light-font"> <i className="fas fa-circle"></i>Essay Grader</li>
                                    <li className="light-font"> <i className="fas fa-circle"></i>Essay Feedback</li>
                                    <li className="light-font"> <i className="fas fa-circle"></i>Fact Checking</li>
                                </ul>
                                <button className="btn btn-primary" onClick={() => navigate('/cancellation-step3')}>Select</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ReducedPrice;