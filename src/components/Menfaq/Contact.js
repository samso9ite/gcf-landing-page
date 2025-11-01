import React from "react";

function Contact() {
    return (
        <>
            <section className="faq-form pt-120 pb-120">
                <div className="container">
                    <div className="block-title text-center">
                        <p className="block-title__tagline">contact</p>
                        <h2 className="block-title__title">
                            Feel free to get in touch <br /> with our team
                        </h2>
                    </div>
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
                            <div className="col-md-12 text-center">
                                <button type="submit" className="thm-btn">
                                    Send a Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;
