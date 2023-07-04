import React from "react";
import "../css/latesIdea.css";
const LatesIdea = () => {
  return (
    <div>
      <section id="feature">
        <div class="title-text">
          <h1 id="why">CHECK OUT OUR LATEST IDEA</h1>
          <p>
            Mauris Mattis & Auctor Cursus. Phasellus Tellus Tellus, Imperdiet Ut
            Imperdiet Eu, Iaculis A Sem. Donec Vehicula Luctus.
          </p>
        </div>
        {/* <!-- Work with us section start there  --> */}
        <div class="feature-box color-icon">
          <div class="features ">
            <h1>
              <i class="fa-regular fa-heart"></i> GREATE SUPPORT
            </h1>
            {/* <!-- features disc  and icon - --> */}
            <div class="features-desc">
              {/* <!-----features text---> */}
              <div class="features-text">
                <h1>
                  <i class="fa-regular fa-clipboard"></i> WORK ONTIME
                </h1>
              </div>
            </div>
            {/* <!-- doblicate no1 --> */}
            <h1>
              <i class="fa-solid fa-handshake-angle wave"></i> CERTIFIED
              QUALITIES
            </h1>
            {/* <!-- features disc  and icon - --> */}
            <div class="features-desc">
              {/* <!-----features text---> */}
              <div class="features-text">
                <h1>
                  <i class="fa-regular fa-pen-to-square"></i> CERTIFIED
                  QUALITIES
                </h1>
              </div>
            </div>
            {/* <!-- features disc  and icon - --> */}
            <div class="features-desc">{/* <!-----features text---> */}</div>
            {/* <!-- Middle part is there  --> */}
          </div>
          {/* <!-- Doblicate 01 --> */}
          <div class="features-img">
            <img
              src="https://brigate.vercel.app/img/idea1.jpg"
              alt="404 module not found!"
            />
          </div>
        </div>
        {/* <!-- Work with us section end there  --> */}
      </section>
    </div>
  );
};

export default LatesIdea;
