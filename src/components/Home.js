import React from "react";
import About from "./base/About";
import Contact from "./base/Contact";
import Footer from "./base/Footer";
import Header from "./base/Header";
import Nav from "./base/Nav";
import Resume from "./base/Resume";

function App() {
  return (
    <div>
        <Header/>
        <Nav profileImage={require("../images/avatar2.png")}/>  
        <About profileImage={require("../images/avatar2.png")}/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>  
  );
}

export default App;
