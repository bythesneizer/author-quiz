//Packages
import React from "react";

//Components
import Hero from "./components/Hero.js";
import Turn from "./components/Turn.js";
import Continue from "./components/Continue.js";
import Footer from "./components/Footer.js";

//Styling
import "./AuthorQuiz.css";
import "./bootstrap.min.css";

const AuthorQuiz = ({turnData}) => {

    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData} />
        <Continue />
        <Footer />
      </div>
    );

}

export default AuthorQuiz;
