import { useNavigate } from 'react-router-dom'

const ProPricing = () => {
    let navigate = useNavigate()
    return (
        <section className="inner-package-text">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-12 inner-subscription">
                        <div className="inner-content_">
                            <h2>What is Lorem Ipsum?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h5>Our Features</h5>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Ut nulla tellus, eleifend euismod pellent</li>
                                        <li><i className="fas fa-check-circle"></i>Ut nulla tellus, eleifend euismod pellent</li>
                                        <li><i className="fas fa-check-circle"></i>Ut nulla tellus, eleifend euismod pellent</li>
                                        <li><i className="fas fa-check-circle"></i>Ut nulla tellus, eleifend euismod pellent</li>
                                        <li><i className="fas fa-check-circle"></i>Ut nulla tellus, eleifend euismod pellent</li>
                                        <li><i className="fas fa-check-circle"></i>Ut nulla tellus, eleifend euismod pellent</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <img src={require('../../images/pack-1.png')} />
                                </div>
                            </div >
                        </div >
                    </div >
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="package-inner bg-gradients">
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
                            <a><button className="btn btn-dark" onClick={() => navigate('/checkout')}>Check Out</button></a>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default ProPricing