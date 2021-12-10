import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { VideoServices } from "./components/VideoServices/VideoServices";
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';

import "./App.css";

function App() {
  return (
    <div className="background">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<VideoServices />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
