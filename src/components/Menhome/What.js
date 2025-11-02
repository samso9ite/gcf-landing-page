import { Link } from 'react-router-dom';
import service01 from '../../assets/images/shapes/service-h-1.png'
import service02 from '../../assets/images/shapes/service-h-2.png'
import service03 from '../../assets/images/shapes/service-h-3.png'
import service1 from '../../assets/images/gcf/loanImg.png'
import service2 from '../../assets/images/gcf/carLoan3.jpg'
import service3 from '../../assets/images/gcf/signature-8803700_1280.png'


function What() {
  const services = [
    {
      imageSrc: service1,
      title: 'Business Loan',
      text: 'Fuel your business growth with our competitive business loans. Get the capital you need to expand operations, purchase equipment, or boost your working capital.',
      link: '/servicedetails',
      icon: 'icon-briefcase'
    },
    {
      imageSrc: service2,
      title: 'Car Loan',
      text: 'Drive away in your dream car with our flexible auto financing. We offer competitive rates and customizable terms for both new and used vehicles.',
      link: '/servicedetails',
      icon: 'icon-car'
    },
    {
      imageSrc: service3,
      title: 'Quick Approval',
      text: 'Experience fast and hassle-free loan approval. Our streamlined process ensures you get the funds you need when you need them most.',
      link: '/servicedetails',
      icon: 'icon-confirmation'
    }
  ];

  return (
    <>
      <section className="service-one pt-120 pb-140">
        <img src={service01} className="service-one__icon-1" alt="" />
        <img src={service02} className="service-one__icon-2" alt="" />
        <img src={service03} className="service-one__icon-3" alt="" />
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">What We're Offering</p>
            <h2 className="block-title__title">
              Tailored financing solutions <br /> for your success{' '}
            </h2>
          </div>
          <div className="row row-gutter-y-50">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-12 col-sm-12" key={index}>
                <div className="service-card">
                  <div className="service-card__image">
                    <img src={service.imageSrc} alt={service.title} />
                    <Link to={service.link}></Link>
                  </div>
                  <div className="service-card__content">
                    <div className="service-card__content__inner">
                      <div className="service-card__icon">
                        <i className={service.icon}></i>
                      </div>
                      <h3 className="service-card__title">
                        <Link to={service.link}>{service.title}</Link>
                      </h3>
                      <p className="service-card__text">{service.text}</p>
                      <Link to={service.link} className="service-card__link">
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default What;
