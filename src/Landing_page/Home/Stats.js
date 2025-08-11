import React from "react";

const Stats = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-lg-6 p-5">
          <h2 className="mb-5 fs-1">Trust with confidence</h2>
          <h3 className="fs-4">Customer-first always</h3>
          <p>
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h3 className="fs-4">No spam or gimmicks</h3>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h3 className="fs-4">The Zerodha universe</h3>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-4">Do better with money</h3>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-lg-6 p-5 text-center">
          <img className="w-100" src="media/images/ecosystem.png" />
          <a className="me-5" href="" style={{ textDecoration: "none" }}>
            Explore our products <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            Try Kite demo <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats;
