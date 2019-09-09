import React from "react";
import "../bootstrap.min.css";

export default function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from<span> </span>
          <a href="http://commons.wikimedia.org/wiki/Main_Page">
            Wikipedia Commons
          </a>
          <span> </span>and are on the public domain
        </p>
      </div>
    </div>
  );
}
