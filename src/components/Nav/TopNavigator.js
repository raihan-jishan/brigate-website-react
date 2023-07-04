/*
    title: TopNavigator file , 
    desc: for top information. 
    date: 29 - 6 - 2023. 

*/
import React from "react";
import "../../css/TopNavigator.css";
const TopNavigator = () => {
  return (
    <>
      <header id="pageTop" class="header">
        <div class="row">
          <div class="topIntro">
            <div class="phone">
              <i class="fa fa-phone"></i>
              <span>Phone: +961 7869</span>
            </div>
            <div class="email m-left">
              <i class="fa fa-envelope"></i>
              <span>Email: brigateworks@gmail.com</span>
            </div>
            <div class="socialLinks">
              <div class="faceBook">
                <i class="fa fa-facebook"></i>
              </div>
              <div class="twittEr">
                <i class="fa fa-twitter"></i>
              </div>
              <div class="linkedIn">
                <i class="fa fa-linkedin-square"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopNavigator;
