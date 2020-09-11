import React, {useState} from "react"
import ReactDOM from "react-dom"
import CEPValidator from "./components/CEPValidator"
import FooterInfo from "./components/FooterInfo"
import "./style.css"

function App() {
	return (
		<div id="app">
			<CEPValidator />
			<FooterInfo />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))