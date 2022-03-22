import React from "react";
import { name, city } from "../data/data.js";

const divStyle = {
  color: 'firebrick',
};

function ComponentWithTransition() {
  return <h1 style={divStyle}></h1>;
}

function Home() {
  return (
    <div id="home">
      <h1 style="firebrick">
        {username} is a Web Developer from {city}
      </h1>
    </div>
  )}

export default Home;
