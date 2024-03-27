import React from "react";
import "../css/header.css";

export default function HeaderComponent() {
  return (
    <header className="headerContainer">
      <h1 style={{ fontStyle: "italic", display: "inline", color: "grey" }}>
        LawBlog:
      </h1>
      <h1 style={{ fontWeight: "bold", display: "inline" }}>
        The <span style={{ fontWeight: "bold" }}>Law Blog</span>
      </h1>
      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident
        totam aspernatur amet sit corrupti sunt rem autem cum incidunt!
      </h6>
    </header>
  );
}
