import React from 'react'
import BGImgBe1 from "../../assets/images/backgrounds/benefit-bg-1-1.jpg";
import rsimg1 from '../../assets/images/resources/benefit-1-1.png'


function Benefit() {
  return (
    <>
        <section className="benefit-one pt-120">
          <div className="benefit-one__shape-1 wow fadeInLeft"
            data-wow-delay="000ms" data-wow-duration="1500ms" style={{ backgroundImage: `url(${BGImgBe1})` }}>
          </div>
          <div className="benefit-one__shape-2"></div>
          <div className="container">
            <div className="row row-gutter-y-60">
              <div className="col-lg-6">
                <div className="benefit-one__image wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms">
                  <img src={rsimg1} alt="" />
                  <div className="benefit-one__image__caption">
                    <h3 className="benefit-one__image__title">99.9%</h3>
                    <p className="benefit-one__image__text">
                      Success Rates Guarantee
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="benefit-one__content">
                  <div className="block-title text-left">
                    <p className="block-title__tagline">our benefits</p>
                    <h2 className="block-title__title">
                      Why you should choose our company
                    </h2>
                  </div>
                  <p className="benefit-one__text">
                    Nullam vel nibh facilisis lectus fermentum ultrices quis non
                    risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. In hac habitasse platea dictumst. Duis porta, quam ut
                    finibus ultrices, lorem lacus congue lorem et rutrum sapien
                    magna tincidunt magna.
                  </p>
                  <div className="benefit-one__box">
                    <div className="benefit-one__box__icon">
                      <i className="icon-bank"></i>
                    </div>
                    <div className="benefit-one__box__content">
                      <h3 className="benefit-one__box__title">
                        Lowest bank fees
                      </h3>
                      <p className="benefit-one__box__text">
                        Lorem ipsum dolor consectetur notte massa sapien samet.
                        Aucibus sed sem non, mattis commodo nisi.
                      </p>
                    </div>
                  </div>
                  <div className="benefit-one__box">
                    <div className="benefit-one__box__icon">
                      <i className="icon-payment"></i>
                    </div>
                    <div className="benefit-one__box__content">
                      <h3 className="benefit-one__box__title">
                        Up to 20.000$ limit
                      </h3>

                      <p className="benefit-one__box__text">
                        Lorem ipsum dolor consectetur notte massa sapien samet.
                        Aucibus sed sem non, mattis commodo nisi.
                      </p>
                    </div>
                  </div>
                  <div className="benefit-one__box">
                    <div className="benefit-one__box__icon">
                      <i className="icon-smartphone-1"></i>
                    </div>
                    <div className="benefit-one__box__content">
                      <h3 className="benefit-one__box__title">Easy in 3 steps</h3>
                      <p className="benefit-one__box__text">
                        Lorem ipsum dolor consectetur notte massa sapien samet.
                        Aucibus sed sem non, mattis commodo nisi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Benefit