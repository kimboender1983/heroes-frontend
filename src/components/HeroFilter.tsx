import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../styles/HeroFilter.scss';
import { HeroFilterValueContextConsumer } from '../contexts/HeroFilterValueContext';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const BackButton = styled.button`
	box-shadow: none;
	border: 2px solid white;
	text-transform: uppercase;
	padding: 0.8rem;
	background-color: transparent;
	border-radius: 3px;
	color: white;
	color: white;
	font-weight: bold;
	font-family: 'Bangers', cursive;
	letter-spacing: 2px;
	font-size: 2em;
	cursor: pointer;
	transition: all 0.1s ease-in-out;
	&:hover {
		transform: scale(1.015);
	}
`;

const HeroFilter = (props: { noSearch: boolean }) => {
	return (
		<div className="input-holder">
			<Container>
				<Row>
					<Col sm={3}>
						{props.noSearch && (
							<Link to="/">
								<BackButton>Back</BackButton>
							</Link>
						)}
					</Col>
					<Col sm={6}>
						<HeroFilterValueContextConsumer>
							{Object =>
								Object && (
									<div>
										{!props.noSearch && (
											<input
												autoFocus
												name="search"
												type="text"
												placeholder="Enter superhero name"
												onChange={e =>
													Object.updateValue(e.currentTarget.value)
												}
											/>
										)}
									</div>
								)
							}
						</HeroFilterValueContextConsumer>
					</Col>
					<Col sm={3} />
				</Row>
			</Container>
		</div>
	);
};

export default HeroFilter;
