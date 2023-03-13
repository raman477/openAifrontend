import { useNavigate } from "react-router-dom";

const Pricing = () => {
    let navigate = useNavigate()
    return (
        <section className="packages">
            <div className="container">
                <div className="text-center">
                    <h1>Ready to start with <br />Abracadabra?</h1>
                    <p>Choose the package that best suits you</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="package-inner">
                            <h4>Free</h4>
                            <h4>$ 0</h4>
                            <p>Per Month</p>
                            <ul className="p-0">
                                <li><i className="fas fa-circle"> </i>5k words/month</li>
                                <li className="light-font"> <i className="fas fa-circle"></i>Essay Grader</li>
                            </ul>
                            <div className="box"></div>
                            <button className="btn btn-dark" onClick={()=>navigate('/freePricing')}>Select</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="package-inner">
                            <h4>Essentials</h4>
                            <h4>$ 16</h4>
                            <p>Per Month</p>
                            <ul className="p-0">
                                <li><i className="fas fa-circle"> </i>30k words/month</li>
                                <li className="light-font"> <i className="fas fa-circle"></i>AI Content Detection</li>
                            </ul>
                            <div className="box">
                                <p><i className="fas fa-plus"></i>Everything in <b><span className="text-danger">Free</span></b></p>
                            </div>
                            <button className="btn btn-dark" onClick={()=>navigate('/essentialPricing')}>Select</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="package-inner">
                            <h4>Premium</h4>
                            <h4>$ 16</h4>
                            <p>Per Month</p>
                            <ul className="p-0">
                                <li><i className="fas fa-circle"> </i>30k words/month</li>
                                <li className="light-font"> <i className="fas fa-circle"></i>AI Content Detection</li>
                            </ul>
                            <div className="box">
                                <p><i className="fas fa-plus"></i>Everything in <b><span className="text-danger">Essentials</span></b></p>
                            </div>
                            <a><button className="btn btn-dark" onClick={()=>navigate('/premiumPricing')}>Select</button></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="package-inner">
                            <h4>Pro</h4>
                            <h4>$ 48</h4>
                            <p>Per Month</p>
                            <ul className="p-0">
                                <li><i className="fas fa-circle"> </i>100k words/month</li>
                                <li className="light-font text-white">AI Content Detection</li>
                            </ul>
                            <div className="box">
                                <p className=""><i className="fas fa-plus"></i>Everything in <b><span className="text-danger">Premium</span></b></p>
                            </div>
                            <a><button className="btn btn-dark" onClick={()=>navigate('/proPricing')}>Select</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Pricing;