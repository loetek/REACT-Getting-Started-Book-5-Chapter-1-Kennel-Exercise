import ReactDOM from "react-dom"
import React from 'react'
import KennelNorth from "./components/KennelNorth";
import KennelSouth from "./components/KennelSouth";


ReactDOM.render(<KennelNorth />, document.querySelector("#root"));
ReactDOM.render(<KennelSouth />, document.querySelector("#root"));