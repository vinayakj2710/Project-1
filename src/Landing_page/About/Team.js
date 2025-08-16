import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="container">
      <div className="row text-center border-top">
        <h1 className="my-5">People</h1>
      </div>
      <div className="row text-muted p-3">
        <div className="col-12 col-lg-6 p-3 text-center">
          <img className="w-50 circle" src="media/images/nithinKamath.jpg" />
          <h4 className="mt-5">Nithin Kamath</h4>
          <p className="mt-2">Founder, CEO</p>
        </div>
        <div className="col-12 col-lg-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <Link to="/">Homepage</Link> /{" "}
            <Link to="/about">TradingQnA</Link> /{" "}
            <Link to="/about">Twitter</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
