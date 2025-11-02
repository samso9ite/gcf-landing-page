import BGPH1 from '../../assets/images/gcf/personal-loan-banner.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

function Main({title, subtitle, link}) {
    return (
        <>
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: `url(${BGPH1})` }}></div>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                ></div>
                <div className="container">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><Link to="/">{title}</Link ></li>
                        <li><span>{subtitle}</span></li>
                    </ul>
                    <h2>{link}</h2>
                </div>
            </section>
        </>
    )
}

export default Main