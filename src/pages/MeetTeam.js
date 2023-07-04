import React from "react";
import "../css/MeetOurTeam.css";
const MeetTeam = () => {
  return (
    <div>
      <section id="meetTeam">
        <div class="title-text">
          <h1 id="why">MEET OUR TEAM </h1>
          <p>
            Mauris Mattis Auctor Cursus. Phasellus Tellus Tellus, Imperdiet
            Phasellus Tellus Tellus, Imperdiet Ut Imperdiet Eu
          </p>
        </div>
        <div class="row-boxes row">
          <div class="box">
            <img
              src="https://brigate.vercel.app/img/1.jpg"
              alt="404 module not found"
            />
            <span>JOHN WELSON</span>
            <p>Civil Engineer</p>
            <div class="social-connect">
              <i class="fa-brands fa-facebook"></i>{" "}
              <i class="fa-brands fa-google"></i>{" "}
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          {/* <!-- 2nd box --> */}
          <div class="box">
            <img
              src="https://brigate.vercel.app/img/3.jpg"
              alt="404 module not found!"
            />
            <span>JAME SON</span>
            <p>Achitechure Design</p>
            <div class="social-connect">
              <i class="fa-brands fa-facebook"></i>{" "}
              <i class="fa-brands fa-google"></i>{" "}
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div class="box">
            <img
              src="https://brigate.vercel.app/img/4.jpg"
              alt="404 module not found!"
            />
            <span>TONY TINY</span>
            <p>Civil Engineer</p>
            <div class="social-connect">
              <i class="fa-brands fa-facebook"></i>{" "}
              <i class="fa-brands fa-google"></i>{" "}
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div class="box">
            <img
              src="https://brigate.vercel.app/img/2.jpg"
              alt="404 module not found!"
            />
            <span>TOM MAS</span>
            <p> Project Manager</p>
            <div class="social-connect">
              <i class="fa-brands fa-facebook"></i>{" "}
              <i class="fa-brands fa-google"></i>{" "}
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div class="align-center">
          <a href="" class="btn-primary btn-big">
            Join Our Team <i class="fa-solid fa-plus"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default MeetTeam;
