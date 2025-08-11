import React from "react";

const Awards = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex align-items-center">
        <div className="col-12 col-lg-6 p-5">
          <img
            className="w-100"
            src="media/images/largestBroker.svg"
            alt="Award Image"
          />
        </div>
        <div className="col-12 col-lg-6 p-5">
          <h2>Largest stock broker in India</h2>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-12 col-lg-6">
              <ul>
                <li>
                  <p>Future and options</p>
                </li>
                <li>
                  <p>Comodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6">
              <ul>
                <li>
                  <p>Stocks and IPO's</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and government funds</p>
                </li>
              </ul>
            </div>
            <img className="w-lg-75 w-100" src="media/images/pressLogos.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
