
function Contactfile() {
    return (
        <>
            <section className="contact-one pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-one__content">
                                <div className="block-title">
                                    <p className="block-title__tagline">contact</p>
                                    <h2 className="block-title__title">Feel free to get
                                        in touch</h2>
                                </div>
                                <p className="contact-one__text">Get in touch with us through any of the contact methods, and we will get back to you as soon as possible.</p>
                                <div className="contact-one__social">
                                    <a href="https://twitter.com/globalcash" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                    <a href="https://facebook.com/globalcash" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                                    <a href="https://instagram.com/globalcash" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form action="assets/sendemail.php" className="form-one contact-form-validated">
                                <div className="row row-gutter-y-20 row-gutter-x-20">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Full name" name="name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" placeholder="Email address" name="email" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Phone number" name="phone" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Subject" name="subject" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea placeholder="Message" name="message"></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="thm-btn">Send a Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactfile