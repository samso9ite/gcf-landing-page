import AnimatedNumber from "animated-number-react";

function Counter() {
  const counters = [
    {
      count: 7000,
      suffix: "",
      title: "Loans Approve"
    },
    {
      count: 50,
      suffix: "",
      title: "Daily Payments"
    },
    {
      count: 3000,
      suffix: "",
      title: "Happy Customers"
    },
    {
      count: 20,
      suffix: "",
      title: "Account Officers"
    }
  ];

  return (
    <>
      <section className="fact-one pt-140 pb-100">
        <div className="container">
          <div className="row row-gutter-y-30">
            {counters.map((counter, index) => (
              <div
                className="col-6 col-sm-6 col-md-6 col-lg-3"
                key={index}
              >
                <div className="fact-one__item">
                  <div className="fact-one__count">
                    <span className="count-box">
                      <span
                        className="count-text"
                        data-stop={counter.count}
                        data-speed="1500"
                      >
                        <AnimatedNumber
                          value={counter.count}
                          duration={5000}
                          formatValue={(v) => Math.round(v)}
                        />
                      </span>
                    </span>
                    {counter.suffix}
                  </div>
                  <h3 className="fact-one__title">{counter.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter;
