
/*
    title: OurLatesNews.js file, 
    desc: a news container file. 
    date: same date; 

*/
import React from 'react'

const OurLatesNews = () => {
  return (
    <div>
          <section id="ourLatesNews">
         <div class="title-text">
            <h1 id="why">OUR LATEST NEWS </h1>
            <p>Mauris Mattis Auctor Cursus. Phasellus Tellus Tellus, Imperdiet Phasellus Tellus Tellus, Imperdiet Ut Imperdiet Eu</p>
         </div>
         <div class="row-boxes row">
            <div class="box">
               <img
                  src="https://brigate.vercel.app/img/news-1.jpg"
                  alt="404 module not found"
                  />
               <span> WORK HARD TO BUILD
               <i class="fa-solid fa-wand-magic-sparkles"></i>
               </span>
               <p>Aliquam Erat Volutpat. Suspendisse Suspen Vulput Port Condimentum. Vulput Porttitor Condimentum.
               </p>
               <div class="social-connect">
                  <i class="fa-brands fa-facebook"></i>  <i class="fa-brands fa-google"></i>   <i class="fa-brands fa-square-twitter"></i><i class="fa-brands fa-linkedin"></i>
               </div>
            </div>
            {/* <!-- 2nd box --> */}
            <div class="box">
               <img
                  src="https://brigate.vercel.app/img/news-2.jpg"
                  alt="404 module not found!"
                  />
               <span>
               Give honesty
               <i class="fa-solid fa-hammer"></i>
               </span>
               <p>  Aliquam Erat Volutpat. Suspendisse Suspen Vulput Port Condimentum. Vulput Porttitor Condimentum. </p>
               <div class="social-connect">
                  <i class="fa-brands fa-facebook"></i>  <i class="fa-brands fa-google"></i>   <i class="fa-brands fa-square-twitter"></i><i class="fa-brands fa-linkedin"></i>
               </div>
            </div>
            <div class="box">
               <img
                  src="https://brigate.vercel.app/img/news-3.jpg"
                  alt="404 module not found!"
                  />
               <span>Keep Work Properly  <i class="fa-solid fa-seedling"></i> 
               </span>
               <p> Aliquam Erat Volutpat. Suspendisse Suspen Vulput Port Condimentum. Vulput Porttitor Condimentum.</p>
               <div class="social-connect">
                  <i class="fa-brands fa-facebook"></i>  <i class="fa-brands fa-google"></i>   <i class="fa-brands fa-square-twitter"></i><i class="fa-brands fa-linkedin"></i>
               </div>
            </div>
         </div>
          </section>
    </div>
  )
}

export default OurLatesNews