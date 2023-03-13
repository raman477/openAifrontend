// import React, { useContext } from 'react'
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import AllPackages from "./components/AllPackage/allPackage";
import SureCancellation from "./components/CancelPack/cancelStep1";
import ReducedPrice from "./components/CancelPack/cancelStep2";
import CancellationConfirm from "./components/CancelPack/cancelStep3";
import CheckoutPage from "./components/Checkout/checkout";
import PaymentUnsuccessfull from "./components/Checkout/paymentFail";
import PaymentSuccess from "./components/Checkout/paymentSuccess";
import ContactUs from "./components/Contact/contact";
import { TestDemo } from "./components/demo";
import HomePage from "./components/Home/home";
import Landing from "./components/LandingPage/landing";
import EssentialPricing from "./components/Pricing/essential";
import FreePricing from "./components/Pricing/free";
import PremiumPricing from "./components/Pricing/premium";
import Pricing from "./components/Pricing/pricing";
import ProPricing from "./components/Pricing/pro";
import PrivacyPolicy from "./components/Privacy/privacy";
import Signin from "./components/Signup/signin";
import SignUp from "./components/Signup/signup";
import TermsCondition from "./components/Terms/terms";
import appContext from "./context/globalContext";

export const Routing = () => {
    const contextData = useContext(appContext)
    console.log("token",contextData.token);
    return (
        <Routes>
            <>
                {(contextData.token == '' || contextData.token == null) ?
                    <>
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/auth/unidays" element={<TestDemo />} />
                        <Route path="/" element={<Landing />} />
                        <Route path="*" element={<Landing />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-condition" element={<TermsCondition />} />
                        

                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/freePricing" element={<FreePricing />} />
                        <Route path="/essentialPricing" element={<EssentialPricing />} />
                        <Route path="/premiumPricing" element={<PremiumPricing />} />
                        <Route path="/proPricing" element={<ProPricing />} />
                        
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/payment-success" element={<PaymentSuccess />} />
                    </>
                    :
                    <>
                        <Route path="*" element={<HomePage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/all-packages" element={<AllPackages />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/payment-success" element={<PaymentSuccess />} />
                       

                        <Route path="/cancellation-step1" element={<SureCancellation />} />
                        <Route path="/cancellation-step2" element={<ReducedPrice />} />
                        <Route path="/cancellation-step3" element={<CancellationConfirm />} />
                        <Route path="/paymentUnsuccessfull" element={<PaymentUnsuccessfull />} />
                    </>
                }

            </>
        </Routes>
    )
}