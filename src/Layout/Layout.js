/*
    title: Layout.js file.
    desc: main structur all file or pages as same time.
    date: 29 - 6 - 23 .
    

*/
import React from "react";
import Nav from "../components/Nav/Nav.js";
import Home from "../pages/Home.js";
import Whatwedo from "../pages/Whatwedo.js";
import WorkwithourTeams from "../pages/WorkwithourTeams.js";
import ProjectComplete from '../pages/ProjectComplete.js';
import MoreFromUs from "../pages/MoreFromUs.js";
import PricingTable from "../pages/PricingTable.js";
import LatesIdea from "../pages/LatesIdea.js";
import MeetTeam from "../pages/MeetTeam.js";
import BestProjects from "../pages/BestProjects.js";
import OurLatesNews from "../pages/OurLatesNews.js";
import Footer from "../components/Footer/Footer.js";
import Routes from "../Routes/Routes.js";
import Contact from "../pages/Contact.js";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Home />
      <Routes /> {/* for naviagate page directions  */}
      <Whatwedo />
      <WorkwithourTeams />
      <ProjectComplete />
      <MoreFromUs />
      <PricingTable />
      <LatesIdea />
      <MeetTeam />
      <BestProjects />
      <OurLatesNews />  
      {children}
      <Footer />
    </>
  );
};

export default Layout;
