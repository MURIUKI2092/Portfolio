import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../src/containers/Landing"
import AboutPage  from "../src/containers/about"
import Projo from "../src/containers/projo"
import Contacts from "../src/containers/contacts"


const Router = () => {

    return (
      <BrowserRouter>
      
      <Routes>
        
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<Projo/>} />
        <Route path="/contact" element={<Contacts/>} />
        
        
      </Routes>

      
        
        
      </BrowserRouter>
    );
};

export default Router;