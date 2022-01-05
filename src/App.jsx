import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/footer/Footer'
import {
  Navigation,
  Home,
  NftPage,
  ClubForm

} from "./components";

function App() {

    return(
        <>

        <Router>
            <Navigation className="nav-bar" />
           
           <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/NftPage" element={<NftPage />} />
           <Route path="JoinTheClub" element={<ClubForm />} />
         
           </Routes>
 
       </Router>

        </>
        

    )

    }

    export default App


