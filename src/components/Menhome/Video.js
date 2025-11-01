import BGVImg1 from "../../assets/images/backgrounds/video-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React, {useState} from "react";


function Video() {

    const [ytShow, setytShow] = useState(false);

  return (
    <>
        <section className="video-one video-one--home pt-240 pb-120" style={{ backgroundImage: `url(${BGVImg1})`}}>
            <div className="video-one__shape"></div>
            <div className="container">
            <div className="row row-gutter-y-50">
                <div className="col-lg-6">
                <div className="video-one__content">
                    <Link to="#" className="video-popup video-one__btn " onClick={() => setytShow(true)}>
                    <i className="fa fa-play"></i>
                    <span className="ripple"></span>
                    </Link>
                    <h3 className="video-one__title">
                    Hundreds of customers <br /> trust our company
                    </h3>
                </div>
                </div>
                <div className="col-lg-6">
                <ul className="list-unstyled video-one__list">
                    <li>
                    <i className="icon-tick"></i>
                    Expert & Certified
                    </li>
                    <li>
                    <i className="icon-tick"></i>
                    Quality Services
                    </li>
                    <li>
                    <i className="icon-tick"></i>
                    Quick Loan Order
                    </li>
                    <li>
                    <i className="icon-tick"></i>
                    Status Monitor
                    </li>
                    <li>
                    <i className="icon-tick"></i>
                    Status Monitor
                    </li>
                    <li>
                    <i className="icon-tick"></i>
                    Easy to Use
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        {ytShow && (
        <>
          <div
            className="mfp-bg mfp-fade mfp-ready"
            style={{ height: "8265px", position: "absolute" }}
          ></div>
          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
            tabindex="-1"
            style={{ top: "2000px", position: "absolute", height: "300px" }}
          >
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
              <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                  <button
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                    onClick={() => setytShow(false)}
                  >
                    ×
                  </button>
                  <iframe
                    className="mfp-iframe"
                    src="//www.youtube.com/embed/m2b9ZTBlW2k?autoplay=1"
                    frameborder="0"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Video