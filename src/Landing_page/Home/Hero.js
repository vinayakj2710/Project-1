import React from "react";

const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img className="mb-5" src="media/images/homehero.png" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds and
          more
        </p>
        <button
          className="btn btn-primary fs-5 mx-auto p-2"
          style={{ width: "20%" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
