import React from "react";
import "../bootstrap.min.css";

const Turn = props => {
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img src={props.author.imageUrl} className="authorImage" alt="Author" />
      </div>
      <div className="col-6">
        {props.books.map(title => (
          <p>{title}</p>
        ))}
      </div>
    </div>
  );
};

export default Turn;
