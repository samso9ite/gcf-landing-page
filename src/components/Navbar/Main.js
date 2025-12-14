import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import logo from "../../assets/images/gcf/gcf.png";

const Navbar = () => {
  const [mobile, setmobile] = useState(false);
  const [homeDrop, sethomeDrop] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const [menu, setmenu] = useState({});

  // determine active menu based on current path
  const setActiveFromPath = useCallback(() => {
    switch (path) {
      case "/":
        setmenu({ home: true });
        break;
      case "/about":
        setmenu({ about: true });
        break;
      case "/contact":
        setmenu({ contact: true });
        break;
      case "/simulation":
        setmenu({ simu: true });
        break;
      default:
        setmenu({ home: true });
    }
  }, [path]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    setActiveFromPath();
  }, [path, setActiveFromPath]);
  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 141 ? setSticky(true) : setSticky(false);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="topbar">
          <div className="container-fluid">
            <div className="topbar__info">
              <Link to="#">
                <i className="icon-pin"></i>Maryland, Lagos. Nigeria
              </Link>
              <Link to="#">
                <i className="icon-phone"></i>+234 123 4567
              </Link>
              <Link to="mailto:needhelp@company.com">
                <i className="icon-email"></i> info@gcf.ng
              </Link>
            </div>
            <div className="topbar__links">
              <Link to="#">Login</Link>
              <Link to="#">Create an account</Link>
            </div>
            <div className="topbar__social">
              <a
                href="https://twitter.com/globalcash"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Global Cash on Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://facebook.com/globalcash"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Global Cash on Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com/globalcash"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Global Cash on Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <nav
          className={`main-menu ${
            sticky && "stricky-header stricked-menu stricky-fixed"
          }`}
        >
          <div className="container-fluid">
            <div className="main-menu__logo">
              <Link to="/">
                <img
                  src={logo}
                  width="110"
                  height="61"
                  alt="Global Cash Finance"
                />
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
                <li className={`dropdown ${menu.simu && "current"}`}>
                  <Link to="/simulation">Simulation</Link>
                </li>
                <li className={`contact ${menu.contact && "current"}`}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="main-menu__right">
              <button
                type="button"
                onClick={() => setmobile(true)}
                className="main-menu__toggler mobile-nav__toggler"
                aria-label="Open navigation menu"
                style={{backgroundColor:"transparent", border:"none", fontWeight:"lighter"}}
              >
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
              <a
                href="https://app.gcf.ng/signin"
                className="thm-btn main-menu__btn"
              >
                Request Loan
              </a>
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

      <div
        className={`mobile-nav__wrapper ${mobile ? "expanded" : ""}`}
        aria-hidden={!mobile}
      >
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={() => setmobile(false)}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={() => setmobile(false)}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img src={logo} width="155" alt="" />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li className="dropdown current">
                <div className={homeDrop ? "expanded" : ""}>
                  <Link to="/" onClick={() => setmobile(false)}>
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/about" onClick={() => setmobile(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/simulation" onClick={() => setmobile(false)}>
                  Simulation
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setmobile(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="icon-email"></i>
              <Link to="mailto:info@gcf.ng">info@gcf.ng</Link>
            </li>
            <li>
              <i className="icon-telephone"></i>
              <Link to="tel:666-888-0000">+234 811 1243 323</Link>
            </li>
          </ul>

          <div className="mobile-nav__social">
            <a
              href="https://twitter.com/globalcash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com/globalcash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com/globalcash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
