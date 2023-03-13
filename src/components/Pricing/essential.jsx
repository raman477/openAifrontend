import { useNavigate } from 'react-router-dom'

const EssentialPricing = () => {
    let navigate = useNavigate()
    return (
        <section class="inner-package-text">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-9 col-sm-12 inner-subscription">
                        <div class="inner-content_">
                            <h2>What is Lorem Ipsum?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <h5>Our Features</h5>
                                    <ul>
                                        <li><i class="fas fa-check-circle"></i>Ut nulla tellus, eleifend euismod pellent</li>
                                        <li><i class="fas fa-check-circle"></i>Ut nulla tellus, eleifend euismod pellent</li>
                                        <li><i class="fas fa-check-circle"></i>Ut nulla tellus, eleifend euismod pellent</li>
                                        <li><i class="fas fa-check-circle"></i>Ut nulla tellus, eleifend euismod pellent</li>
                                        <li><i class="fas fa-check-circle"></i>Ut nulla tellus, eleifend euismod pellent</li>
                                        <li><i class="fas fa-check-circle"></i>Ut nulla tellus, eleifend euismod pellent</li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <img src={require('../../images/pack-1.png')} />
                                </div>
                            </div >
                        </div >
                    </div >
                    <div class="col-lg-3 col-md-3 col-sm-12">
                        <div class="package-inner bg-gradients">
                            <h4>Essentials</h4>
                            <h4>$ 16</h4>
                            <p>Per Month</p>
                            <ul class="p-0">
                                <li><i class="fas fa-circle"> </i>30k words/month</li>
                                <li class="light-font"> <i class="fas fa-circle"></i>AI Content Detection</li>
                            </ul>
                            <div class="box">
                                <p><i class="fas fa-plus"></i>Everything in <b><span class="text-danger">Free</span></b></p>
                            </div>
                            <a><button class="btn btn-dark" onClick={() => navigate('/checkout')}>Check Out</button></a>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default EssentialPricing