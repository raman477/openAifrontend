
import ReactDatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment/moment';
import { createSubscriptionForUser } from '../../services/apiService';
import { toast } from 'react-toastify';
import PaymentSuccess from './paymentSuccess';
import { useState } from 'react';

const CheckoutPage = () => {
    let navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, control } = useForm()
    let location = useLocation()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(location);

    const onSubmit = data => {
        console.log(moment(data.expiryDate).format("MM/YYYY"));
        const payload = {
            "email": location.state.email,
            "pack_name": location.state.pack_name,
            "pack_price": location.state.price,
            "price_id": location.state.price_id
        }
        createSubscriptionForUser(payload).then(response => {
            if (response.status == 200) {
                // toast.success("successfull")
                setShow(true)
                navigate('/home')
            }
        })


    }
    return (
        <section className="Check-out-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 bg-white">
                        <div className="text-center">
                            <p>Check Out Page</p>
                            <div className="cancel">
                                <h6>${location.state.price} / month</h6>
                                <p>Cancel anytime</p>
                            </div>
                        </div>
                        <div className="check-out-form">
                            <form className="check-out-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group first-inner-col">
                                    <label>Card Number</label>
                                    <div class="input-imgg">
                                        <input type="text" placeholder="" {...register('cardNumber', { required: "Please enter your card number." })} />
                                        <div className="card-img">
                                            <img src={require('../../images/visa.png')} />
                                            <img src={require('../../images/master.png')} />
                                            <img src={require('../../images/amex.png')} />
                                            <img src={require('../../images/discover.png')} />
                                            <img src={require('../../images/lock.png')} />
                                        </div>
                                    </div>

                                </div>
                                {errors.cardNumber && <span className='input-error'>{errors.cardNumber.message}</span>}
                                {/* <div className="form-group">
                                    <label>Country/Region</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>United Kingdom</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div> */}
                                <div className="form-group mt-3">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <label for="date" className="col-1 col-form-label">Expiry Date</label>
                                            {/* <div className="input-group date" id="datepicker">
                                                <input type="date" className="form-control" id="date" {...register('expiryDate')}  />
                                                <span className="input-group-append">
                                                    <span className="input-group-text bg-light d-block">
                                                        <i className="fa fa-calendar"></i>
                                                    </span>
                                                </span>
                                            </div> */}
                                            <Controller
                                                control={control}
                                                rules={{ required: "Please select expiry date." }}
                                                name="expiryDate"
                                                render={({ field: { onChange, value } }) => (
                                                    <ReactDatePicker
                                                        dateFormat='MM/yyyy'

                                                        showMonthYearPicker
                                                        value={value}
                                                        onChange={(date) => onChange(date)}
                                                        minDate={new Date()}
                                                        // onBlur={onBlur}
                                                        selected={value}
                                                    />
                                                )}
                                            />
                                            {errors.expiryDate && <span className='input-error'>{errors.expiryDate.message}</span>}
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                                <label>CVV</label>
                                                <input type="text" placeholder="" minLength={3} maxLength={4} {...register("cvv", { required: "Please your cvv" })} />
                                            </div>
                                            {errors.cvv && <span className='input-error'>{errors.cvv.message}</span>}
                                        </div>
                                        {/* <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                                <label>Postal Code</label>
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <button className="btn btn-primary font-weight-bold"><img src={require("../../images/check-out.png")} />Check Out</button>
                            </form>
                            <p className='checkout_terms'>Your subscription will automatically renew every month. After your first month, you will be charged $4, plus applicable taxes, on each renewal until you cancel your subscription. You can cancel any time on the <span>Account</span> page. If you cancel, previous charges will not be refunded, but you may continue to use the service until the end of the term you paid for. </p>
                            <p className='checkout_terms'>By clicking the “Check out” button above, you are agreeing to our <span onClick={() => navigate('/terms-condition')}>Terms of Service</span> and acknowledge that you have read our <span onClick={() => navigate('/privacy-policy')}>Privacy Policy.</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            <PaymentSuccess show={show} close={handleClose}/>
        </section>
    )
}
export default CheckoutPage;