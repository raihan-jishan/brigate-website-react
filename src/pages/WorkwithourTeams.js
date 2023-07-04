/*
    title: WorkwithourTeams.js file,
    desc: for add jsx codes. 
    date: same date. 

*/
import React from "react";
import "../css/WorkwithourTeams.css";
const WorkwithourTeams = () => {
  return (
    <div>
      <section id="feature">
        <div class="title-text">
          <h1 id="why">WORK WITH OUR TEAMS</h1>
          <p>
            Mauris Mattis Auctor Cursus. Phasellus Tellus Tellus, Imperdiet Ut
            Imperdiet Eu, Iaculis A Sem. Donec Vehicula Luctus Nunc In Laoreet.
            Aliquam Erat Volutpat. Suspendisse Vulputate Porttitor Condimentum.
            Proin Viverra Orci A Leo Suscipit Placerat. Sed Feugiat Posuere
            Semper. Cras Vitae Mi Erat
          </p>
        </div>
        {/* Work with us section start there  --> */}
        <div class="feature-box">
          <div class="features">
            <h1>
              <i class="fa-solid fa-building-circle-check wave"></i> Building
              quality
            </h1>
            {/* features disc  and icon - --> */}
            <div class="features-desc">
              {/* <!-----features text---> */}
              <div class="features-text">
                <h1>
                  <i class="fa-solid fa-user-plus wave"></i> Performances Team
                </h1>
              </div>
            </div>
            {/* doblicate no1 --> */}
            <h1>
              <i class="fa-solid fa-handshake-angle wave"></i> Honest Advisor
            </h1>
            {/* features disc  and icon - --> */}
            <div class="features-desc">
              {/* <!-----features text---> */}
              <div class="features-text">
                <h1>
                  <i class="fa-solid fa-person-digging wave"></i> Work Solutions
                </h1>
              </div>
            </div>
            {/* Doblicate no2 --> */}
            <h1>
              <i class="fa-solid fa-headphones wave"></i> 24/1week Supports
            </h1>
            {/* features disc  and icon - --> */}
            <div class="features-desc">
              {/* <!-----features text---> */}
              <div class="features-text">
                <h1>
                  <i class="fa-solid fa-bookmark wave"></i> Work & Deadline
                </h1>
              </div>
            </div>
            {/* Middle part is there  --> */}
          </div>
          {/* Doblicate 01 --> */}
          <div class="features-img">
            <img
              src="https://brigate.vercel.app/img/team-photo.jpg"
              alt="404 module not found!"
            />
          </div>
          <a href="" class="btn-primary">
            Get start <i class="fa-solid fa-house-laptop"></i>
          </a>
        </div>
        {/* Work with us section end there  --> */}
      </section>
    </div>
  );
};

export default WorkwithourTeams;
