import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import './Home.css'
function Home() {
  return (
    <div className="home-container" id="home">
      <Nav/>
      <Profile />
      <Footer />
    </div>
  );
}

export default Home;
