import React from 'react'
import { Link } from 'react-router-dom'
import blog01 from '../../../assets/images/blog/blog-d-1-1.jpg'
import blogau01 from '../../../assets/images/blog/blog-author-1-1.jpg'
import blogj01 from '../../../assets/images/blog/blog-comment-1-1.jpg'
import blogj02 from '../../../assets/images/blog/blog-comment-1-2.jpg'
import bloglp01 from '../../../assets/images/blog/lp-1-1.jpg'
import bloglp02 from '../../../assets/images/blog/lp-1-2.jpg'
import bloglp03 from '../../../assets/images/blog/lp-1-3.jpg'

function First() {
    return (
        <>
            <section className="blog-details pt-120 pb-120">
                <div className="container">
                    <div className="row row-gutter-y-30">
                        <div className="col-lg-8">
                            <div className="blog-card__image">
                                <div className="blog-card__date"><span>05</span> Mar</div>
                                <img src={blog01} alt="" />
                            </div>
                            <div className="blog-card__meta">
                                <Link to="/newsdetails"><i className="far fa-user-circle"></i> by Admin</Link>
                                <Link to="/newsdetails"><i className="far fa-comments"></i> 2 Comments</Link>
                            </div>
                            <h3 className="blog-card__title">Which growth strategies you should adopt</h3>
                            <div className="blog-details__content">
                                <p>There are not many of passages of lorem ipsum available alteration in some form. Donec
                                    scelerisque dolor id nunc dictum, interdum gravida. Te veritus tractatos delicatissimi qui,
                                    justo diceret mentitum ut sit. Qui sed reque dicam, qui veri nullam vituperatoribus in. Tibique
                                    maiestatis sum quod sum ut alienum nec et, summo possim persequeris vix mea. Adhuc quodsi qui,
                                    sit no tale essent electram. Mei sum prodesset in pro, quo scripta feugait vidisse. Lorem ipsum
                                    dolor sit amet, eu duo ferri labor. Mea ex modo reque senserit, et sed hinc dolor, scaevola sum
                                    salutandi expetendis vix ne. Eros dicat his sum mel quod mundi consequat sum. There are not many
                                    of passages of lorem ipsum available alteration in some form. Donec scelerisque dolor id nunc
                                    dictum, interdum gravida. Te veritus tractatos delicatissimi qui.</p>
                                <p>Qui sed reque dicam, qui veri nullam vituperatoribus in. Tibique maiestatis sum quod sum ut
                                    alienum nec et, summo possim persequeris vix mea. Tibique maiestatis sum quod sum ut alienum nec
                                    et, summo possim persequeris vix mea. Adhuc quodsi qui, sit no tale essent electram. Mei sum
                                    prodesset in pro, quo scripta feugait vidisse. Lorem ipsum dolor sit amet, eu duo ferri labor.
                                </p>
                            </div>
                            <div className="blog-details__meta">
                                <div className="blog-details__tags">
                                    <span>Tags</span>
                                    <Link to="#">Mortgage</Link>
                                    <Link to="#">Business Loan</Link>
                                </div>
                                <div className="blog-details__social">
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-facebook"></i></Link>
                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                </div>
                            </div>
                            <div className="blog-details__author">
                                <div className="blog-details__author__image">
                                    <img src={blogau01} alt="" />
                                </div>
                                <div className="blog-details__author__content">
                                    <h3 className="blog-details__author__name">Christine Eve</h3>
                                    <p className="blog-details__author__text">Lorem ipsum is simply free text by copytyping refreshing.
                                        Neque porro est qui dolorem ipsum quia quaed veritatis et quasi architecto.</p>

                                </div>
                            </div>
                            <div className="blog-details__comment">
                                <h3 className="blog-details__title">2 Comments</h3>
                                <div className="blog-details__comment__item">
                                    <div className="blog-details__comment__image">
                                        <img src={blogj01} alt="" />
                                    </div>
                                    <div className="blog-details__comment__content">
                                        <h3 className="blog-details__comment__name">Kevin Martin</h3>
                                        <p className="blog-details__comment__text">Lorem ipsum is simply free text used by copytyping
                                            refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                    <Link to="#" className="thm-btn">Reply</Link>
                                </div>
                                <div className="blog-details__comment__item">
                                    <div className="blog-details__comment__image">
                                        <img src={blogj02} alt="" />
                                    </div>
                                    <div className="blog-details__comment__content">
                                        <h3 className="blog-details__comment__name">Kevin Martin</h3>
                                        <p className="blog-details__comment__text">Lorem ipsum is simply free text used by copytyping
                                            refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                    <Link to="#" className="thm-btn">Reply</Link>
                                </div>
                            </div>
                            <div className="blog-details__form">
                                <h3 className="blog-details__title">Leave a comment</h3>
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
                        <div className="col-lg-4">
                            <div className="blog-sidebar">
                                <div className="blog-sidebar__item blog-sidebar__item--search">
                                    <form action="#" className="blog-sidebar__search">
                                        <input type="search" placeholder="Search" />
                                        <button type="submit" className="blog-sidebar__search__btn">
                                            <i className="icon-magnifying-glass"></i>
                                        </button>
                                    </form>
                                </div>
                                <div className="blog-sidebar__item blog-sidebar__item--posts">
                                    <h3 className="blog-sidebar__title">Recent Posts</h3>
                                    <ul className="list-unstyled blog-sidebar__post">
                                        <li className="blog-sidebar__post__item">
                                            <div className="blog-sidebar__post__image">
                                                <img src={bloglp01} alt="" />
                                            </div>
                                            <div className="blog-sidebar__post__content">
                                                <span className="blog-sidebar__post__author">
                                                    <i className="far fa-user-circle"></i>
                                                    by admin
                                                </span>
                                                <h3 className="blog-sidebar__post__title"><Link to="/newsdetails">Integer tristique
                                                    odio
                                                    vitae lorem gra</Link></h3>
                                            </div>
                                        </li>
                                        <li className="blog-sidebar__post__item">
                                            <div className="blog-sidebar__post__image">
                                                <img src={bloglp02} alt="" />
                                            </div>
                                            <div className="blog-sidebar__post__content">
                                                <span className="blog-sidebar__post__author">
                                                    <i className="far fa-user-circle"></i>
                                                    by admin
                                                </span>
                                                <h3 className="blog-sidebar__post__title"><Link to="/newsdetails">Integer tristique
                                                    odio
                                                    vitae lorem gra</Link></h3>
                                            </div>
                                        </li>
                                        <li className="blog-sidebar__post__item">
                                            <div className="blog-sidebar__post__image">
                                                <img src={bloglp03} alt="" />
                                            </div>
                                            <div className="blog-sidebar__post__content">
                                                <span className="blog-sidebar__post__author">
                                                    <i className="far fa-user-circle"></i>
                                                    by admin
                                                </span>
                                                <h3 className="blog-sidebar__post__title"><Link to="/newsdetails">Integer tristique
                                                    odio
                                                    vitae lorem gra</Link></h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog-sidebar__item blog-sidebar__item--categories">
                                    <h3 className="blog-sidebar__title">Categories</h3>
                                    <ul className="list-unstyled blog-sidebar__categories">
                                        <li>
                                            <Link to="#">Mortage</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Business Loan</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Studies</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Personal Loans</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Finance</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog-sidebar__item blog-sidebar__item--tags">
                                    <h3 className="blog-sidebar__title">Tags</h3>
                                    <ul className="list-unstyled blog-sidebar__tags">
                                        <li>
                                            <Link to="#">Mortage</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Business Loan</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Personal Loan</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Banking</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Finance</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default First