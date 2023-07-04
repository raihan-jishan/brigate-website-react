/*
    title: MoreFromus.js file, 
    desc: for morefrom us file, 
    date: same date;

*/
import React from "react";
import "../css/MoreFromus.css";
const MoreFromUs = () => {
  return (
    <div>
      <section id="moreFromUs">
        <div class="title-text">
          <h1 id="why">MORE FROM US</h1>
          <p>
            Mauris Mattis Auctor Cursus. Phasellus Tellus Tellus, Imperdiet
            Phasellus Tellus Tellus, Imperdiet Ut Imperdiet Eu
          </p>
        </div>
        {/* <!-- image boxes --> */}
        <div class="row-boxes row">
          <div class="box">
            <img
              src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="404 module not found"
            />
            <span> CONSTRUCTION all buildings</span>
            <p>Lorem ipsum dolor sit am vfdrfgregrew</p>
          </div>
          {/* <!-- 2nd box --> */}
          <div class="box">
            <img
              src="https://media.istockphoto.com/id/182061540/photo/skyscraper-with-a-airplane-silhouette.webp?b=1&s=170667a&w=0&k=20&c=Or6O5u6XqUkNaMvYS6UZUzLqIg-poWaF_XsUZ2cw45Q="
              alt="404 module not found!"
            />
            <span>Build all projects successfully !</span>
            <p>Lorem ipsum dolor sit am vfdrfgregrew</p>
          </div>
          <div class="box">
            <img
              src="https://images.unsplash.com/photo-1586335926015-5cf9289efbab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBtYW4lMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="404 module not found!"
            />
            <span> We followiing all thing, any conditions!</span>
            <p>Lorem ipsum dolor sit am vfdrfgregrew</p>
          </div>
          <div class="box">
            <img
              src="https://media.istockphoto.com/id/1378269637/photo/there-are-regulations-we-must-comply-with.jpg?s=612x612&w=0&k=20&c=Isk96TLgejmw7zxYI6ojcb-gSRO2DnGVLPKU5wvXBRE="
              alt="404 module not found!"
            />
            <span> Keep all projects with team.... </span>
            <p>Lorem ipsum dolor sit am vfdrfgregrew</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreFromUs;
