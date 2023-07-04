/*
    title: PricingTable.js file, 
    desc: a simple pricing table file. 
    date: same date;

*/
import React from 'react'
import "../css/PricingTable.css";
const PricingTable = () => {
  return (
    <div>
     <section id="pricePlan">
         <div class="title-text">
         <h1 id="why">
            PRICE PLAN 
            <p id="info"></p>
         </h1>
         <div class="priceBox">
            <div class="priceListBoxes">
               <h1>START</h1>
               <div class="price">
                  <h1>$59</h1>
               </div>
               <ul>
                  <li><i class="fa-solid fa-check"></i> Build with advance business
                  </li>
                  <li><i class="fa-solid fa-check"></i>Customizing to builder</li>
           
                  <li><i class="fa-solid fa-check"></i> 
                     Best agency market 
                  </li>
                  <li><i class="fa-solid fa-check"></i> 
                     Customer Service 
                  </li>
                  <li><i class="fa-solid fa-check"></i> 
                     Up to 1000 Worker
                  </li>
                  <li><i class="fa-solid fa-check"></i> 
                     Unlimited Project
                  </li>
                  <li><i class="fa-solid fa-check"></i> 
                     Build with longer terms
                  </li>
               </ul>
            </div>
            <div class="priceListBoxes">
               <h1>$PRO</h1>
               <div class="price">
                  <h1>$149</h1>
               </div>
               <ul>
                  <li><i class="fa-solid fa-check"></i> Build with advance business
                  </li>
                  <li><i class="fa-solid fa-check"></i>Customizing to builder</li>
            
                  <li><i class="fa-solid fa-check"></i> 
                     Best agency market 
                  </li>
                  <li><i class="fa-solid fa-check"></i> 
                     Customer Service 
                  </li>
                  <li><i class="fa-solid fa-check"></i> 
                     Up to 1000 Worker
                  </li>
                  <li><i class="fa-solid fa-check"></i> 
                     Unlimited Project
                  </li>
                  <li><i class="fa-solid fa-check"></i> 
                     Build with longer terms
                  </li>
               </ul>
            </div>
            <div class="priceListBoxes">
               <h1>$PREMIUM</h1>
               <div class="price">
                  <h1>$180$</h1>
               </div>
               <ul>
                  <li><i class="fa-solid fa-check"></i> Build with advance business
                  </li>
                  <li><i class="fa-solid fa-check"></i>Customizing to builder</li>
               
                  <li><i class="fa-solid fa-check"></i> 
                     Best agency market 
                  </li>
                  <li><i class="fa-solid fa-check"></i> 
                     Customer Service 
                  </li>
                  <li><i class="fa-solid fa-check"></i> 
                     Up to 1000 Worker
                  </li>
                  <li><i class="fa-solid fa-check"></i> 
                     Unlimited Project
                  </li>
                  <li><i class="fa-solid fa-check"></i> 
                     Build with longer terms
                  </li>
               </ul>
            </div>
         </div>
         </div>
      </section>
    </div>
  )
}

export default PricingTable;