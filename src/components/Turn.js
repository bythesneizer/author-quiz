import React from "react";
import "../bootstrap.min.css";
import "./Turn.css";
import Book from "./Book";

const Turn = props => {
  const changeBackgroundColor = value => {
    const mapping = {
      none: "",
      wrong: "red",
      correct: "green"
    };
    return mapping[value];
  };

  return (
    <div
      className="row turn"
      style={{ backgroundColor: changeBackgroundColor(props.highlight) }}
    >
      <div className="col-4 offset-1">
        <img src={props.author.imageUrl} className="authorImage" alt="Author" />
      </div>
      <div className="col-6">
        {props.books.map(title => (
          <Book key={title} title={title} onClick={props.onAnswerSelected} />
        ))}
      </div>
    </div>
  );
};

export default Turn;
