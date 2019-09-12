//Packages
import React, { Component } from "react";
import { shuffle, sample } from "underscore";

//Components
import Header from "./components/Header.js";
import Turn from "./components/Turn.js";
import Continue from "./components/Continue.js";
import Footer from "./components/Footer.js";

//Styling
import "./AuthorQuiz.css";
import "./bootstrap.min.css";

const getTurnData = authors => {
  //reduce has 2 paramters - callback function and initial value
  const allBooks = authors.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);
  console.log(answer);
  return {
    books: fourRandomBooks,
    author: authors.find(author => author.books.some(title => title === answer))
  };
};

class AuthorQuiz extends Component {
  state = {
    turnData: getTurnData(this.props.authors),
    highlight: ""
  };

  onAnswerSelected = answer => {
    const isCorrect = this.state.turnData.author.books.some(
      book => book === answer
    );
    console.log(isCorrect);
    const value = isCorrect ? "correct" : "wrong";
    this.setState({
      highlight: value
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Turn
          author={this.state.turnData.author}
          books={this.state.turnData.books}
          highlight={this.state.highlight}
          onAnswerSelected={this.onAnswerSelected}
        />
        <Continue />
        <Footer />
      </div>
    );
  }
}

export default AuthorQuiz;
