import React from 'react';
import { Link } from 'react-router-dom';

function First() {
  const teamMembers = [
    {
      name: 'Connor Estrada',
      image: 'assets/images/team/team-1-1.jpg',
    },
    {
      name: 'Darrell Powell',
      image: 'assets/images/team/team-1-2.jpg',
    },
    {
      name: 'Carolyn Love',
      image: 'assets/images/team/team-1-3.jpg',
    },
    {
      name: 'Elsie Reid',
      image: 'assets/images/team/team-1-4.jpg',
    },
    {
      name: 'Flora Fletcher',
      image: 'assets/images/team/team-1-5.jpg',
    },
    {
      name: 'Julian Miller',
      image: 'assets/images/team/team-1-6.jpg',
    },
  ];

  return (
    <>
      <section className="team-grid pt-120 pb-120">
        <div className="container">
          <div className="row row-gutter-y-30">
            {teamMembers.map((member, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay={`${index * 100}ms`}
                key={index}
              >
                <div className="team-card">
                  <div className="team-card__image">
                    <img src={member.image} alt={member.name} />
                    <div className="team-card__social">
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-facebook"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-pinterest"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="team-card__content">
                    <div className="team-card__content__inner">
                      <h3 className="team-card__title">
                        <Link to="/teamdetails">{member.name}</Link>
                      </h3>
                      <p className="team-card__designation">ADVISOR</p>
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

export default First;
