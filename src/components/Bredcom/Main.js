import BGPH1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

function Main({title, subtitle, link}) {
    return (
        <>
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: `url(${BGPH1})` }}></div>

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