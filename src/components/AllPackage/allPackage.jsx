import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { get_sub_packages } from "../../services/apiService"

const AllPackages = () => {
    const [essentialPrice, setEssentialPrice] = useState('')
    const [premiumPrice, setPremiumPrice] = useState('')
    const [proPrice, setProPrice] = useState('')
    let location = useLocation()
    let navigate = useNavigate()
    const get_packages = () => {
        get_sub_packages().then(res => {
            if (res.status == 200) {
                console.log(res.data[0].product_default_price.amount);
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].product_default_price.amount == 16) {
                        setEssentialPrice(res.data[i].product_default_price.id)
                    }
                    if (res.data[i].product_default_price.amount == 24) {
                        setPremiumPrice(res.data[i].product_default_price.id)
                    }
                    if (res.data[i].product_default_price.amount == 48) {
                        setProPrice(res.data[i].product_default_price.id)
                    }
                }
            }
        })
    }
    const subscription = (e, price, price_id, eleId) => {
        console.log("price", price);
        let divElements = document.querySelectorAll('.package-inner')
        Array.from(divElements).forEach((ele) => ele.classList.remove('bg-gradients'))
        document.getElementById(eleId).classList.add('bg-gradients')
        if (eleId != "free") {
            const data = {
                "pack_name": eleId,
                "email": location.state.email,
                "price": price,
                "price_id": price_id
            }
            navigate('/checkout', { state: data })
        }
    }
    useEffect(() => {
    
        get_packages()
    }, [])
    return (
        <section className="packages">
            <div className="container">
                <div className="text-center">
                    <h1>Ready to start with <br />Abracadabra?</h1>
                    <p>Choose the package that best suits you</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div id="free" className="package-inner">
                            <h4>Free</h4>
                            <h4>$ 0</h4>
                            <p>Per Month</p>
                            <ul className="p-0">
                                <li><i className="fas fa-circle"> </i>5k words/month</li>
                                <li className="light-font"> <i className="fas fa-circle"></i>Essay Grader</li>
                            </ul>
                            <div className="box"></div>
                            <span><button className="btn btn-dark" onClick={(e) => subscription(e, 0, '', "free")}>Select</button></span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div id="essential" className="package-inner">
                            <h4>Essentials</h4>
                            <h4 >$ 16</h4>
                            <p>Per Month</p>
                            <ul className="p-0">
                                <li><i className="fas fa-circle"> </i>30k words/month</li>
                                <li className="light-font"> <i className="fas fa-circle"></i>AI Content Detection</li>
                            </ul>
                            <div className="box">
                                <p><i className="fas fa-plus"></i>Everything in <b><span className="text-danger">Free</span></b></p>
                            </div>
                            <span><button className="btn btn-dark" onClick={(e) => subscription(e, 16, essentialPrice, "essential")}>Select</button></span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div id="premium" className="package-inner">
                            <h4>Premium</h4>
                            <h4>$ 24</h4>
                            <p>Per Month</p>
                            <ul className="p-0">
                                <li><i className="fas fa-circle"> </i>30k words/month</li>
                                <li className="light-font"> <i className="fas fa-circle"></i>AI Content Detection</li>
                            </ul>
                            <div className="box">
                                <p><i className="fas fa-plus"></i>Everything in <b><span className="text-danger">Essentials</span></b></p>
                            </div>
                            <span><button className="btn btn-dark" onClick={(e) => subscription(e, 24, premiumPrice, "premium")}>Select</button></span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div id="pro" className="package-inner">
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
                            <span><button className="btn btn-dark" onClick={(e) => subscription(e, 48, proPrice, "pro")}>Select</button></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AllPackages