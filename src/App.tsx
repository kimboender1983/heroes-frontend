import React, { Component } from 'react';
import SearchResults from './components/SearchResults';
import HeroFilter from './components/HeroFilter';
import HeroDetails from './components/HeroDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
	HeroFilterValueContextProvider,
	Ivalue
} from './contexts/HeroFilterValueContext';

class App extends Component {
	updateSearchValue = (value: string) => {
		this.setState({ value });
	};

	state: Ivalue = {
		value: 'Test',
		updateValue: this.updateSearchValue
	};

	render() {
		return (
			<div className="App">
				<Router>
					<HeroFilterValueContextProvider value={this.state}>
						<Route path="/" exact component={HeroFilter} />
						<Route path="/" exact component={SearchResults} />
						<Route path="/hero/:slug" component={HeroDetails} />
					</HeroFilterValueContextProvider>
				</Router>
			</div>
		);
	}
}

export default App;
