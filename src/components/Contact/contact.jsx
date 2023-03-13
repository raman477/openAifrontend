const ContactUs = () => {
    return (
        <section className="Contact-us">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <div className="contact-us">
                            <div className="text-center">
                                <h4>Contact Us</h4>
                                <p>Contact us and we’ll do our best to get back to you as fast as possible. Feel free to get in touch about anything from upgrades and cancellations to new features you’d love to see</p>
                            </div>
                            <form className="inner-contact">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input type="text" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input type="text" placeholder=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" placeholder="johndoe@gmail.com"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <label>Comments</label>
                                            <textarea cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="your message here …" name="your-message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn-primary">Contact Us</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactUs;