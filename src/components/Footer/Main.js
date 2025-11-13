import { Link } from 'react-router-dom'
import React from 'react'
import Logos from '../../assets/images/gcf/gcf.png'

const Footer = () => {
  return (
    <>
        <footer className="main-footer">
            <div className="container">
                <div className="row row-gutter-y-30">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget footer-widget--about">
                            <Link to="/" className="footer-widget__logo">
                                <img src={Logos} alt="finlon" width="130" height="81" />
                            </Link>
                            <p className="footer-widget__text" style={{width:"20rem"}}>We provide flexible financing  options tailored to help your business grow.</p>
                            <ul className="list-unstyled footer-widget__info">
                                <li style={{fontSize:"15px", fontWeight:"400"}}>
                                    <i className="icon-email"></i>
                                   info@globalcash.ng
                                </li>
                                <li style={{fontSize:"15px", fontWeight:"400"}}>
                                    <i className="icon-telephone"></i>
                                    +234 1234553
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget footer-widget--links">
                            <h3 className="footer-widget__title">
                                Explore
                            </h3>
                            <ul className="list-unstyled footer-widget__menu">
                                <li><Link to="/about">About</Link></li>
                                <li><a href='https://app.globalcash.ng' >Apply for Loan</a></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget footer-widget--newsletter">
                            <h3 className="footer-widget__title">
                                Newsletter
                            </h3>
                            <form className="footer-widget__mailchimp">
                                <input type="email" placeholder="Email address" />
                                <p className="footer-widget__mailchimp__text">
                                    <i className="fa fa-check"></i>
                                    I agree to all your terms and policies
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="bottom-footer">
            <div className="container">
                <p className="bottom-footer__text text-center">Copyright &copy; 2025 All Rights Reserved.</p>
                
            </div>
        </div>
    </>
  )
}

export default Footer