/*
    title: home.js file. 
    desc: to code all home page to jsx.
    date: same date; 

*/
import React from "react";
import "../css/Home.css";
import Button from "../components/Buttons/Button.js";
const Home = () => {
  return (
    <div>
      <section id="home">
        <div class="wrapperItem">
          <div class="info">
            <h1>BEST QUALITY STEEL FOR CONSTRUCTION</h1>
            <p>
              Mauris Mattis Auctor Cursus. Phasellus Tellus Tellus, Imperdiet Ut
              Imperdiet Eu, Iaculis A Sem.
            </p>
            {/* <a href="#" class="btn-primary"
                  >Work with us <i class="fa-solid fa-person-digging wave"></i
                  ></a> */}
            <Button
              className="btn-primary"
              title="Work with us"
              icon="fa-solid fa-person-digging wave"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
