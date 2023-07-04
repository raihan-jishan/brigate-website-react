/*
    title: Routes.js file, 
    desc: for setup react router dom;
    date: de67yyyyyyyyyyyyyu

*/
import React from 'react'
import { Route ,Routes as Router ,   } from 'react-router-dom';
import Pages from '../pages/Pages.js';
import Conatct from '../pages/Contact.js';
// import Service from '../pages/';
const Routes = () => {
  return (
    <div>
        <Router>
            <Route path='/pages' element={<Pages />} />
            <Route path='/contact' element={<Conatct />} />
           
        </Router>
    </div>
  )
}

export default Routes