import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import logo from "../../assets/images/gcf/gcf.png";

const Navbar = () => {
  const [mobile, setmobile] = useState(false);
  const [search, setsearch] = useState(false);
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
                <i className="icon-email"></i> info@globalcash.ng
              </Link>
            </div>
            <div className="topbar__links">
              <Link to="#">Login</Link>
              <Link to="#">Create an account</Link>
            </div>
            <div className="topbar__social">
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
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
                  width="130"
                  height="81"
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
              <Link
                to="#"
                onClick={() => setmobile(true)}
                className="main-menu__toggler mobile-nav__toggler"
              >
                <i className="fa fa-bars"></i>
              </Link>
              <Link
                to="#"
                onClick={() => setsearch(true)}
                className="main-menu__search search-toggler"
              >
                <i className="icon-magnifying-glass"></i>
              </Link>
              <a
                href="https://app.globalcash.ng"
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

      <div className={`search-popup ${search && "active"}`}>
        <div
          className="search-popup__overlay search-toggler"
          onClick={() => setsearch(false)}
        ></div>
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="icon-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>

      <div className={`mobile-nav__wrapper ${mobile ? "expanded" : ""}`}>
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
                <Link to="#" className={homeDrop ? "expanded" : ""}>
                  Home
                  <button
                    aria-label="dropdown toggler"
                    className={homeDrop ? "expanded" : ""}
                    onClick={() => sethomeDrop(homeDrop ? false : true)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
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
              <Link to="mailto:info@globalcash.ng">info@globalcash.ng</Link>
            </li>
            <li>
              <i className="icon-telephone"></i>
              <Link to="tel:666-888-0000">+234 811 1243 323</Link>
            </li>
          </ul>

          <div className="mobile-nav__social">
            <Link to="#">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
