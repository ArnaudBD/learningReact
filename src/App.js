import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox"

const state = {
	robots: robots,
	searchfield: ''
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange(event) {
		console.log(event.target.value);
	}
	render() {
		return(
			<div class='tc'>
				<h1>Robofriends</h1>
				<SearchBox onSearchChange={this.onSearchChange}/>
				<CardList robots={this.state.robots}/>
			</div>
		);
	}
}
		
export default App;