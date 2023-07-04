/* eslint-disable jsx-a11y/iframe-has-title */
/*
    title: contact.js file, 
    desc: simple contact file for contact jsx. 
    date: 1 - 7 - 2023. 
*/
import React from "react";
import "../css/Contact.css";
const Contact = () => {
  return (
    <div>
      <section id="contactContainer">
        <div class="contactUsDiv">
          <div class="title-info">
            <h1>Contact</h1>
          </div>
        </div>
        {/* <!-- form --> */}
        <div class="formContainer">
          <form action="">
            <div class="input-feilds">
              <input type="text" placeholder="Name...." />
            </div>
            <div class="input-feilds">
              <input type="email" placeholder="Email ...." />
            </div>
            <div class="input-feilds">
              <input type="text" placeholder="Subject ...." />
            </div>
            <div class="input-feilds">
              <textarea
                name="message"
                placeholder="message ... "
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            {/* <a href="" class="btn-primary login" style="margin: 10px;">
              Contact Us <i class="fa-regular fa-address-card"></i>
            </a> */}
          </form>
          {/* <!-- map --> */}

          <div class="mapSection">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.830147466827!2d103.84315887388972!3d1.27522406181342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19135904756d%3A0xed07eb7662b19aa2!2sDai%20Nippon%20Construction%2C%20Singapore%20Branch!5e0!3m2!1sen!2sbd!4v1688041924737!5m2!1sen!2sbd"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>

          {/* <!-- edn --> */}
          {/* <!-- text --> */}
          <div class="text-items">
            <h3>contact infos</h3>
            <div class="items">
              <i class="fa-solid fa-phone"></i> +855 962323584
            </div>
            <div class="items">
              <i class="fa fa-envelope"></i> brigateworks@gmail.com
            </div>
            <div class="items">
              <i class="fa-solid fa-location-dot"></i> Sangkat Teuk Laak II,
              Khan Toul Kork,
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
