import React, { useState, useEffect } from 'react';
import HeroFilter from '../components/HeroFilter';
import { Container, Row, Col } from 'react-grid-system';
import { getSingleSuperHero } from '../api/apiClient';
import styled from 'styled-components';

const HeroContainer = styled.div`
	background-color: white;
	color: black;
	border-radius: 3px;
	box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 0.35);
	padding: 0.4rem 1.6rem 1.6rem;
	margin-bottom: 2rem;

	table {
		width: 100%;
		font-size: 1.4em;
		thead {
			tr {
				border-bottom: 1px gray solid;

				th {
					h2 {
						text-decoration: underline;
					}
					&:first-child {
					}
					&:last-child {
					}
				}
			}
		}
		tbody {
			tr {
				td {
					vertical-align: top;
					padding-bottom: 0.5rem;
					&:first-child {
						font-weight: bold;
						padding-right: 1rem;
					}
					&:last-child {
					}
				}
			}
		}
	}
`;

const ImageHolder = styled.div`
	img {
		width: 100%;
		display: block;
		object-fit: cover;
		border-radius: 5px;
		border: 5px black solid;
		transform: rotate(1deg);
		margin-top: 1rem;
		box-shadow: 4px 4px 8px -3px rgba(0, 0, 0, 0.5);
	}
`;

const HeroDetails = (props: { location: { state: { id: number } } }) => {
	const { id } = props.location.state;
	const [hero, setHero] = useState();
	const [show, setShow] = useState(false);

	useEffect(() => {
		getSingleSuperHero(id).then(res => {
			setHero(res.data);
			setShow(true);
		});
	}, []);

	return (
		<>
			<HeroFilter noSearch={true} />
			<Container>
				<Row>
					<Col>
						{show && Object.keys(hero).length > 0 && (
							<HeroContainer>
								<h1>{hero.name}</h1>
								<hr />
								<Row>
									<Col sm={6}>
										<table>
											<thead>
												<tr>
													<th colSpan={2} align="left">
														<h2>Apperance</h2>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Race</td>
													<td>
														{hero.appearance.race
															? hero.appearance.race
															: 'unknown'}
													</td>
												</tr>
												<tr>
													<td>Gender</td>
													<td>{hero.appearance.gender}</td>
												</tr>
												<tr>
													<td>Eye color</td>
													<td>{hero.appearance.eyeColor}</td>
												</tr>
												<tr>
													<td>Hair color</td>
													<td>{hero.appearance.hairColor}</td>
												</tr>
												<tr>
													<td>Height</td>
													<td>{hero.appearance.height[1]}</td>
												</tr>
											</tbody>

											<thead>
												<tr>
													<th colSpan={2} align="left">
														<h2>Powerstats</h2>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Combat</td>
													<td>{hero.powerstats.combat}</td>
												</tr>
												<tr>
													<td>Durability</td>
													<td>{hero.powerstats.durability}</td>
												</tr>
												<tr>
													<td>Intelligence</td>
													<td>{hero.powerstats.intelligence}</td>
												</tr>
												<tr>
													<td>Power</td>
													<td>{hero.powerstats.power}</td>
												</tr>
												<tr>
													<td>Speed</td>
													<td>{hero.powerstats.speed}</td>
												</tr>
												<tr>
													<td>Strength</td>
													<td>{hero.powerstats.strength}</td>
												</tr>
											</tbody>
											<thead>
												<tr>
													<th colSpan={2} align="left">
														<h2>Connections</h2>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Group affiliation</td>
													<td>{hero.connections.groupAffiliation}</td>
												</tr>
												<tr>
													<td>Relatives</td>
													<td>{hero.connections.relatives}</td>
												</tr>
											</tbody>
										</table>
									</Col>
									<Col sm={6}>
										<ImageHolder>
											<img src={hero.images.lg} alt={hero.name} />
										</ImageHolder>
									</Col>
								</Row>
								<Row>
									<Col sm={6}>
										<table>
											<thead>
												<tr>
													<th colSpan={2} align="left">
														<h2>Biography</h2>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Alignment</td>
													<td>{hero.biography.alignment}</td>
												</tr>
												<tr>
													<td>Alter egos</td>
													<td>{hero.biography.alterEgos}</td>
												</tr>
												<tr>
													<td>First appearance</td>
													<td>{hero.biography.firstAppearance}</td>
												</tr>
												<tr>
													<td>Full name</td>
													<td>
														{hero.biography.fullName
															? hero.biography.fullName
															: 'unknown'}
													</td>
												</tr>
												<tr>
													<td>Place of birth</td>
													<td>{hero.biography.placeOfBirth}</td>
												</tr>
												<tr>
													<td>Publisher</td>
													<td>{hero.biography.publisher}</td>
												</tr>
												<tr>
													<td>Alisases</td>
													<td>
														{hero.biography.aliases.map(
															(alias: string, index: number) => (
																<span key={index}>
																	{alias}
																	{index !==
																	hero.biography.aliases.length - 1 ? (
																		<span>, </span>
																	) : (
																		''
																	)}
																</span>
															)
														)}
													</td>
												</tr>
											</tbody>
										</table>
									</Col>
									<Col sm={6}>
										<table>
											<thead>
												<tr>
													<th colSpan={2} align="left">
														<h2>Work</h2>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Base</td>
													<td>{hero.work.base}</td>
												</tr>
												<tr>
													<td>Occupation</td>
													<td>{hero.work.occupation}</td>
												</tr>
											</tbody>
										</table>
									</Col>
								</Row>
							</HeroContainer>
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default HeroDetails;
