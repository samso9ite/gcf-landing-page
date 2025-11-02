import BGVImg1 from "../../assets/images/gcf/loanBanner2.jpeg";
import { Link } from "react-router-dom";
import React, {useState} from "react";


function Video() {

    const [ytShow, setytShow] = useState(false);

  return (
    <>
        <section className="video-one video-one--home pt-240 pb-120" style={{ backgroundImage: `url(${BGVImg1})`}}>
            <div className="container">
            <div className="row row-gutter-y-50">
                <div className="col-lg-6">
                <div className="video-one__content">
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
    </>
  )
}

export default Video