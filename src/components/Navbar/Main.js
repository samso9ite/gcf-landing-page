import { Link, useLocation} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import logox from '../../assets/images/logo-dark.png'
import logoL from '../../assets/images/logo-light.png'


const Navbar = () => {
    
    const [mobile, setmobile] = useState(false)
    const [search, setsearch] = useState(false)
    const [homeDrop, sethomeDrop] = useState(false)
    const [headerDrop, setheaderDrop] = useState(false)
    const [servicesDrop, setservicesDrop] = useState(false)
    const [featuresDrop, setfeaturesDrop] = useState(false)
    const [newsDrop, setnewsDrop] = useState(false)
    const [pagesDrop, setpagesDrop] = useState(false)
    const location = useLocation()
    const path = location.pathname
    const [menu, setmenu] = useState({})

    const activeMenu = () => {
        if(path === "/" || path === "/home-02" || path === "/home-03" ){
            setmenu({home:true})
        }else if(path === "/about" ){
            setmenu({about:true})
        }else if(path === "/service" || path === "/servicedetails" ){
            setmenu({services:true})
        }else if(path === "/team" || path === "/teamdetails"  || path === "/creditaudit" || path === "/creditrepair" || path === "/careers" || path === "/faqs" ||  path === "/applynow"){
            setmenu({pages:true})
        }else if(path === "/personalloan" || path === "/loaneligibility" || path === "/homeloan" || path === "/homeloaneligibility" || path === "/compareEMI" || path === "/monthlyloan"){
            setmenu({features:true})
        }
        else if(path === "/newsmain" || path === "/newsdetails" ){
            setmenu({news:true})
        }
        else if(path === "/contact"){
            setmenu({contact:true})
        }else{
            setmenu({home:true})
        }
    }
    
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    useEffect(() => {
        window.scroll(0, 0)
        activeMenu()
    }, [path]);
    const isSticky = () => {
        const scrollTop = window.scrollY;
        scrollTop >= 141 ? setSticky(true) : setSticky(false);
    }

  return (
    <>
        <div className="page-wrapper">
            <div className="topbar">
                <div className="container-fluid">
                    <div className="topbar__info">
                        <Link to="#"><i className="icon-pin"></i>Maryland, Lagos. Nigeria</Link>
                        <Link to="#"><i className="icon-phone"></i>+234 123 4567</Link>
                        <Link to="mailto:needhelp@company.com"><i className="icon-email"></i> info@globalcash.ng</Link>
                    </div>
                    <div className="topbar__links">
                        <Link to="#">Login</Link>
                        <Link to="#">Create an account</Link>
                    </div>
                    <div className="topbar__social">
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                        <Link to="#"><i className="fab fa-facebook"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
            </div>
            <nav className={`main-menu ${sticky && "stricky-header stricked-menu stricky-fixed"}`}>
                <div className="container-fluid">
                    <div className="main-menu__logo">

                        <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-1" viewBox="0 0 317 120">
                            <path d="M259.856,120H0V0H274l43,37.481Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-2" viewBox="0 0 317 120">
                            <path d="M259.856,120H0V0H274l43,37.481Z" />
                        </svg>


                        <Link to="/">
                            <img src={logox} width="140" height="51" alt="Finlon"/>
                        </Link>
                    </div>
                    <div className="main-menu__nav">
                        <ul className="main-menu__list">
                            <li className={`dropdown ${menu.home && "current"}`}>
                                <Link to="/">Home</Link>
                              
                            </li>
                            <li className={`about ${menu.about && "current"}`}>
                                <Link to="/about">About</Link>
                            </li>

                            <li className={`contact ${menu.contact && "current"}`}><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="main-menu__right">
                        <Link to="#" onClick= {() => setmobile(true)} className="main-menu__toggler mobile-nav__toggler">
                            <i className="fa fa-bars"></i>
                        </Link>
                        <Link to="#" onClick={() => setsearch(true)} className="main-menu__search search-toggler">
                            <i className="icon-magnifying-glass"></i>
                        </Link>
                        <Link to="/applynow" className="thm-btn main-menu__btn">Request Loan</Link>
                        <Link to="tel:926668880000" className="main-menu__contact">
                            <span className="main-menu__contact__icon">
                                <i className="icon-phone"></i>
                            </span>
                            <span className="main-menu__contact__text">
                                <strong>92 666 888 0000</strong>
                                Mon to Fri: 9 am to 6 pm
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
        
        <div className={`search-popup ${search && "active"}`}>
            <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
            <div className="search-popup__content">
                <form action="#">
                    <label htmlFor="search" className="sr-only">search here</label>
                    <input type="text" id="search" placeholder="Search Here..." />
                    <button type="submit" aria-label="search submit" className="thm-btn">
                        <i className="icon-magnifying-glass"></i>
                    </button>
                </form>
            </div>
        </div>

        <div className={`mobile-nav__wrapper ${mobile ? "expanded" : ""}`}>
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setmobile(false)}></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setmobile(false)}><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link to="/" aria-label="logo image"><img src={logoL} width="155" alt="" /></Link>
                    </div>
                
                    <div className="mobile-nav__container">
                        <ul className="main-menu__list">
                            <li className="dropdown current">
                                <Link to="#" className={homeDrop ? "expanded" : ""}>Home<button aria-label="dropdown toggler" className={homeDrop ? "expanded" : ""} onClick={() => sethomeDrop(homeDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
                                {homeDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li className="current">
                                            <Link to="/" onClick={() => setmobile(false)}>Home One</Link>
                                        </li>
                                        <li><Link to="/home-02" onClick={() => setmobile(false)}>Home Two</Link></li>
                                        <li><Link to="/home-03" onClick={() => setmobile(false)}>Home Three</Link></li>
                                        <li className="dropdown">
                                            <Link to="#" className={headerDrop ? "expanded" : ""}>Header Styles
                                                <button aria-label="dropdown toggler" className={headerDrop ? "expanded" : ""} onClick={() => setheaderDrop(headerDrop ? false : true)}>
                                                    <i className="fa fa-angle-down"></i>
                                                </button>
                                            </Link>
                                            {headerDrop &&
                                                <ul style={{ display: "block" }}>
                                                    <li className="current"><Link to="/" onClick={() => setmobile(false)}>Header One</Link></li>
                                                    <li><Link to="/home-02" onClick={() => setmobile(false)}>Header Two</Link></li>
                                                    <li><Link to="/home-03" onClick={() => setmobile(false)}>Header Three</Link></li>
                                                </ul>}
                                        </li>
                                    </ul>}
                            </li>
                            <li>
                                <Link to="/about" onClick={() => setmobile(false)}>About</Link>
                            </li>
                            <li className="dropdown">
                                <Link to="#" className={servicesDrop ? "expanded" : ""}>Services
                                    <button aria-label="dropdown toggler" className={servicesDrop ? "expanded" : ""} onClick={() => setservicesDrop(servicesDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {servicesDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/service" onClick={() => setmobile(false)}>Service</Link></li>
                                        <li><Link to="/servicedetails" onClick={() => setmobile(false)}>Service Details</Link></li>
                                    </ul>}
                            </li>
                            <li className="dropdown">
                                <Link to="#" className={pagesDrop ? "expanded" : ""}>Pages
                                    <button aria-label="dropdown toggler" className={pagesDrop ? "expanded" : ""} onClick={() => setpagesDrop(pagesDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {pagesDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/team" onClick={() => setmobile(false)}>Team</Link></li>
                                        <li><Link to="/teamdetails" onClick={() => setmobile(false)}>Team Details</Link></li>
                                        <li><Link to="/creditrepair" onClick={() => setmobile(false)}>Credit Repair</Link></li>
                                        <li><Link to="/creditaudit" onClick={() => setmobile(false)}>Credit Audit</Link></li>
                                        <li><Link to="/careers" onClick={() => setmobile(false)}>Careers</Link></li>
                                        <li><Link to="/faqs" onClick={() => setmobile(false)}>Faqs</Link></li>
                                        <li><Link to="/applynow" onClick={() => setmobile(false)}>Apply Now</Link></li>
                                    </ul>}
                            </li>
                            <li className="dropdown">
                                <Link to="#" className={featuresDrop ? "expanded" : ""}>Features
                                    <button aria-label="dropdown toggler" className={featuresDrop ? "expanded" : ""} onClick={() => setfeaturesDrop(featuresDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {featuresDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/personalloan" onClick={() => setmobile(false)}>Personal Loan</Link></li>
                                        <li><Link to="/loaneligibility" onClick={() => setmobile(false)}>Loan Eligibility</Link></li>
                                        <li><Link to="/homeloan" onClick={() => setmobile(false)}>Home Loan</Link></li>
                                        <li><Link to="/homeloaneligilibity" onClick={() => setmobile(false)}>Home Loan Eligibility</Link></li>
                                        <li><Link to="/compareEMI" onClick={() => setmobile(false)}>Compare EMI</Link></li>
                                        <li><Link to="/monthlycalculator" onClick={() => setmobile(false)}>Monthly Calculator</Link></li>
                                    </ul>}
                            </li>
                            <li className="dropdown">
                            <Link to="#" className={newsDrop ? "expanded" : ""}>News
                                <button aria-label="dropdown toggler" className={newsDrop ? "expanded" : ""} onClick={() => setnewsDrop(newsDrop ? false : true)}>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                            </Link>
                                {newsDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/newsmain" onClick={() => setmobile(false)}>News</Link></li>
                                        <li><Link to="/newsdetails" onClick={() => setmobile(false)}>News Details</Link></li>
                                    </ul>}
                            </li>
                            <li>
                                <Link to="/contact" onClick={() => setmobile(false)}>Contact</Link>
                            </li>
                        </ul>

                    </div>
                    

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="icon-email"></i>
                            <Link to="mailto:needhelp@packageName__.com">needhelp@finlon.com</Link>
                        </li>
                        <li>
                            <i className="icon-telephone"></i>
                            <Link to="tel:666-888-0000">666 888 0000</Link>
                        </li>
                    </ul>

                    <div className="mobile-nav__social">
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                        <Link to="#"><i className="fab fa-facebook"></i></Link>
                        <Link to="#"><i className="fab fa-pinterest"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                    </div>

                </div>
            
        </div>
    </>
  )
}

export default Navbar