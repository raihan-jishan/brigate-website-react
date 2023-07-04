/*
    title: Whatwedo.js file.
    desc: main structur all file or pages as same time.
    date: 29 - 6 - 23 .
    

*/
import React from "react";
import "../css/Whatwedo.css";
const Whatwedo = () => {
  return (
    <div>
      <section class="primaryServices" id="service">
        <div class="row">
          <div
            class="col1 span-1-of-4 primaryServicesBox"
            data-aos="fade-right"
          >
            <div class="sboxIcon">
              <i class="fa fa-briefcase wave"></i>
            </div>
            <div class="sboxTitle">
              <h5>architecture & engineering</h5>
            </div>
            <div class="sboxDes">
              <p>
                Mauris mattis auctor tellus imperdiet eu ut imperdiet tellus,
                imperdiet ut
              </p>
            </div>
            <div class="sboxLink">
              <span>
                <a href="#" class="btn-primary">
                  learn more ⟶
                </a>
              </span>
            </div>
          </div>
          <div
            class="col1 span-1-of-4 primaryServicesBox activeBox"
            data-aos="fade-right"
          >
            <div class="sboxIcon">
              <i class="fa fa-industry wave"></i>
            </div>
            <div class="sboxTitle">
              <h5>Consultant & Preparation</h5>
            </div>
            <div class="sboxDes">
              <p>
                Mauris mattis auctor tellus imperdiet eu ut imperdiet tellus,
                imperdiet ut
              </p>
            </div>
            <div class="sboxLink">
              <span>
                <a href="#" class="btn-primary silver">
                  learn more ⟶
                </a>
              </span>
            </div>
          </div>
          <div
            class="col1 span-1-of-4 primaryServicesBox"
            data-aos="fade-right"
          >
            <div class="sboxIcon">
              <i class="fa fa-line-chart wave"></i>
            </div>
            <div class="sboxTitle">
              <h5>
                Infrastucture & <i class="fa-solid fa-check"></i>Customizing
              </h5>
            </div>
            <div class="sboxDes">
              <p>
                Mauris mattis auctor tellus imperdiet eu ut imperdiet tellus,
                imperdiet ut
              </p>
            </div>
            <div class="sboxLink">
              <span>
                <a href="#" class="btn-primary">
                  learn more ⟶
                </a>
              </span>
            </div>
          </div>
          <div
            class="col1 span-1-of-4 primaryServicesBox"
            data-aos="fade-right"
          >
            <div class="sboxIcon">
              <i class="fa fa-university wave"></i>
            </div>
            <div class="sboxTitle">
              <h5>Builder with Engineering</h5>
            </div>
            <div class="sboxDes">
              <p>
                Mauris mattis auctor tellus imperdiet eu ut imperdiet tellus,
                imperdiet ut
              </p>
            </div>
            <div class="sboxLink">
              <span>
                <a href="#" class="btn-primary">
                  learn more ⟶
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whatwedo;
