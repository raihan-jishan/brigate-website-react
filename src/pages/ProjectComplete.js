/*
    title: PricingTable.js file, 
    desc: for pricing table ,
    date: same date,

*/
import React from "react";
import "../css/ProjectComplete.css";
const PricingTable = () => {
  return (
    <div>
      <section class="blogSection" >
        <div class="row">
          <div class="col1 span-1-of-4 blogBox">
            <div class="blogIcon">
              <i class="fa fa-users"></i>
            </div>
            <div class="blogNumber">
              <h4>
                <span>1200</span>
              </h4>
            </div>
            <div class="blogTitle">
              <h5>HAPPINESS CUSTOMERS</h5>
            </div>
          </div>
          <div class="col1 span-1-of-4 blogBox">
            <div class="blogIcon">
              <i class="fa fa-database"></i>
            </div>
            <div class="blogNumber">
              <h4>
                <span>2080</span>
              </h4>
            </div>
            <div class="blogTitle">
              <h5>PROJECTS COMPLETED</h5>
            </div>
          </div>
          <div class="col1 span-1-of-4 blogBox">
            <div class="blogIcon">
              <i class="fa fa-industry"></i>
            </div>
            <div class="blogNumber">
              <h4>
                <span>4000</span>
              </h4>
            </div>
            <div class="blogTitle">
              <h5>WORLD BRANCHES</h5>
            </div>
          </div>
          <div class="col1 span-1-of-4 blogBox">
            <div class="blogIcon">
              <i class="fa fa-trophy"></i>
            </div>
            <div class="blogNumber">
              <h4>
                <span>100</span>
              </h4>
            </div>
            <div class="blogTitle">
              <h5>SPECIAL WINNER</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingTable;
