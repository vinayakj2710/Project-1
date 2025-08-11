import React from "react";

const Education = () => {
  return (
    <div className="container my-5 ">
      <div className="row d-flex align-items-center">
        <div className="col-12 col-lg-6">
          <img className="w-75" src="media/images/education.svg" />
        </div>
        <div className="col-12 col-lg-6">
          <h2 className="mb-3 fs-2">Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Versity <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
