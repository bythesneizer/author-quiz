//Packages
import React, { Component } from "react";

//Components
import Hero from "./components/Hero.js";
import Turn from "./components/Turn.js";
import Continue from "./components/Continue.js";
import Footer from "./components/Footer.js";

//Styling
import "./AuthorQuiz.css";
import "./bootstrap.min.css";

class AuthorQuiz extends Component {
  render() {
    const authors = [
      {
        name: "Mark Twain",
        imageUrl: "./images/authors/marktwain.jpg",
        imageSource: "Wikipedia Commons",
        books: ["The Adventures of Huckleberry Finn"]
      }
    ];

    return (
      <div className="container-fluid">
        <Hero />
        <Turn author={authors[0]} books={authors[0].books} />
        <Continue />
        <Footer />
      </div>
    );
  }
}

export default AuthorQuiz;
