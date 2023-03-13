import { useNavigate } from "react-router-dom"

const CancellationConfirm = () => {
    let navigate = useNavigate();
    return (
        <section className="cancellation-confirmed">
            <div className="container">
                <div className="text-center">
                    <p><i className="far fa-check-circle"></i>Your cancellation is confirmed. </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-12 col-sm-12">
                        <div className="confirmed-inner">
                            <div>
                                <h4>Hope to see you for your next essay!</h4>
                                <p>You’ll still have access to your current plan until the end of your billing month, where you’ll then be moved to our free plan. If you change your mind, you’ll always be able to upgrade again. </p>
                            </div>
                            <div className="image-inner">
                                <img src="img/confirmed.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CancellationConfirm;