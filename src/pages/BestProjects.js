import React from "react";

const BestProjects = () => {
  return (
    <div>
      <section id="bestProejects">
        <div class="title-text">
          <h1 id="why">OUR BEST PROJECTS </h1>
          <p>
            Mauris Mattis Auctor Cursus. Phasellus Tellus Tellus, Imperdiet
            Phasellus Tellus Tellus, Imperdiet Ut Imperdiet Eu
          </p>
        </div>
        <div class="row-boxes row">
          <div class="box">
            <img
              src="https://brigate.vercel.app/img/project-1.jpg"
              alt="404 module not found"
            />
            <span>
              CONSTRUCTION <i class="fa-solid fa-wand-magic-sparkles"></i>
            </span>
            <p>DISCUSSION TO MAKE A BETTER PROJECT PLAN </p>
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
              src="https://brigate.vercel.app/img/project-2.jpg"
              alt="404 module not found!"
            />
            <span>
              Repair <i class="fa-solid fa-hammer"></i>
            </span>
            <p> DESIGN YOUR INTERIOR HOUSE ONLINE FREE </p>
            <div class="social-connect">
              <i class="fa-brands fa-facebook"></i>{" "}
              <i class="fa-brands fa-google"></i>{" "}
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div class="box">
            <img
              src="https://brigate.vercel.app/img/project-3.jpg"
              alt="404 module not found!"
            />
            <span>
              Hospital <i class="fa-solid fa-seedling"></i>
            </span>
            <p> WE USE QUALITY MATERIAL TO BUILD FOR YOUR</p>
            <div class="social-connect">
              <i class="fa-brands fa-facebook"></i>{" "}
              <i class="fa-brands fa-google"></i>{" "}
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div class="box">
            <img
              src="https://brigate.vercel.app/img/project-4.jpg"
              alt="404 module not found!"
            />
            <span>
              School <i class="fa-solid fa-square-check"></i>
            </span>
            <p> YOUR PROJECT WILL CLEAN AND BEST QUALITY</p>
            <div class="social-connect">
              <i class="fa-brands fa-facebook"></i>{" "}
              <i class="fa-brands fa-google"></i>{" "}
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestProjects;
