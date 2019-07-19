import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { getAllSuperHeroes } from '../api/apiClient';
import { ResultsItem } from '../types/Result';
import HeroListItem from './HeroListItem';
import { HeroFilterValueContextConsumer } from '../contexts/HeroFilterValueContext';

// Get all superheroes from API
const response = getAllSuperHeroes();

// Returns search results
const SearchResults = () => {
	// UseState
	let [res, setRes] = useState([]);
	// Get all superhoes and set in state
	response.then(res => {
		setRes(res.data);
	});
	// Method to filter out heroes by name
	const filterResult = (needle: string, haystack: ResultsItem[]) => {
		return haystack.filter(hero =>
			hero.name.toLowerCase().includes(needle.toLowerCase())
		);
	};
	// Check if result
	if (!res.hasOwnProperty('error')) {
		// return
		return (
			<HeroFilterValueContextConsumer>
				{filter =>
					filter && (
						<>
							<Container>
								<Row>
									{filterResult(filter.value, res).map((hero: ResultsItem) => (
										<Col sm={2} key={hero.id}>
											<HeroListItem key={hero.id} hero={hero} />
										</Col>
									))}
								</Row>
							</Container>
						</>
					)
				}
			</HeroFilterValueContextConsumer>
		);
	} else {
		return <p>No superheroes found</p>;
	}
};

export default SearchResults;
