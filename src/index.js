import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import * as serviceWorker from "./serviceWorker";

const assets = require("./assets.js");

const authors = [
  {
    name: "Mark Twain",
    imageUrl: assets.markTwain,
    imageSource: "Wikimedia Commons",
    books: ["The Adventures of Huckleberry Finn"]
  },
  {
    name: "Joseph Conrad",
    imageUrl: assets.josephConrad,
    imageSource: "Wikimedia Commons",
    books: ["Heart of Darkness"]
  },
  {
    name: "J.K. Rowling",
    imageUrl: assets.jkRowling,
    imageSource: "Wikimedia Commons",
    imageAttribution: "Daniel Ogren",
    books: ["Harry Potter and the Sorcerers Stone"]
  },
  {
    name: "Stephen King",
    imageUrl: assets.stephenKing,
    imageSource: "Wikimedia Commons",
    imageAttribution: "Pinguino",
    books: ["The Shining", "IT"]
  },
  {
    name: "Charles Dickens",
    imageUrl: assets.charlesDickens,
    imageSource: "Wikimedia Commons",
    books: ["David Copperfield", "A Tale of Two Cities"]
  },
  {
    name: "William Shakespeare",
    imageUrl: assets.williamShakespeare,
    imageSource: "Wikimedia Commons",
    books: ["Hamlet", "Macbeth", "Romeo and Juliet"]
  }
];

ReactDOM.render(
  <AuthorQuiz authors={[...authors]} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
