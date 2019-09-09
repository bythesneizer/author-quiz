import React, { Component } from "react";
import ReactDOM from "react-dom";
import AuthorQuiz from "./AuthorQuiz";

describe("Author quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz />, div);
  });
});
