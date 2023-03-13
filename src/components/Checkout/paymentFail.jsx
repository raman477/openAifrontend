import { useNavigate } from 'react-router-dom'

const PaymentUnsuccessfull = () => {
  let navigate = useNavigate()
  return (
    <section class="Check-out-page">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-12 bg-white">
            <div class="text-center">
              <img src={require('../../images/unsucessful-icon.png')} class="unsucessful-img" />
              <div class="unsucessful">
                <h2>Your Order Was Unsuccessful</h2>
                <p>Unfortunately your order didn’t go through. Don’t worry, your card hasn’t been charged. If you’d like to try again you can below. </p>
              </div>
              <div class="cancel">
                <h6>£3.89 / month</h6>
                <p>Cancel anytime</p>
              </div>
            </div>
            <div class="check-out-form">
              <form class="check-out-form">
                <div class="form-group first-inner-col">
                  <label>Card Number</label>
                  <input type="text" placeholder="" />
                  <div class="card-img">
                    <img src={require('../../images/visa.png')} />
                    <img src={require('../../images/master.png')} />
                    <img src={require('../../images/amex.png')} />
                    <img src={require('../../images/discover.png')} />
                    <img src={require('../../images/lock.png')} />
                  </div>
                </div>
                <div class="form-group">
                  <label>Country/Region</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>United Kingdom</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="form-group mt-3">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                      <label for="date" class="col-1 col-form-label">Date</label>
                      <div class="input-group date" id="datepicker">
                        <input type="text" class="form-control" id="date" />
                        <span class="input-group-append">
                          <span class="input-group-text bg-light d-block">
                            <i class="fa fa-calendar"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                      <div class="form-group">
                        <label>Security Code</label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                      <div class="form-group">
                        <label>Postal Code</label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn btn-primary font-weight-bold"><img src={require('../../images/check-out.png')} />Check Out</button>
              </form>
              <p className='checkout_terms'>Your subscription will automatically renew every month. After your first month, you will be charged $4, plus applicable taxes, on each renewal until you cancel your subscription. You can cancel any time on the Account page. If you cancel, previous charges will not be refunded, but you may continue to use the service until the end of the term you paid for. </p>
              <p className='checkout_terms'>By clicking the “Check out” button above, you are agreeing to our <span onClick={() => navigate('/terms-condition')}>Terms of Service </span>and acknowledge that you have read our <span onClick={() => navigate('/privacy-policy')}>Privacy Policy.</span> </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentUnsuccessfull