//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good night" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
var show = " ";
const newstyle = {
  color: "red"
};
const t = new Date().getHours();
if ((t >= 0) & (t < 12)) {
  show = "Good morning";
  newstyle.color = "red";
} else if ((t >= 12) & (t <= 18)) {
  show = "Good Afternoon";
  newstyle.color = "green";
} else {
  show = "Good Night";
  newstyle.color = "blue";
}

ReactDOM.render(
  <center>
    <h1 className="heading" style={newstyle}>
      {show}
    </h1>
  </center>,
  document.getElementById("root")
);
