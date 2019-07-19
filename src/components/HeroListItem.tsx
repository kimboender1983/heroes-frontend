import React from 'react';
import { ResultsItem } from '../types/Result';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroListItemStyled = styled.div`
	background-color: white;
	border: 1px gray solid;
	padding: 0.5em 1.2rem 1rem;
	margin-bottom: 0.5rem;
	border-radius: 2px;
	box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 0.35);
	margin-bottom: 1.6rem;
	transition: all 0.15s ease-in-out;

	a {
		text-decoration: none !important;
	}

	cursor: pointer;
	&:hover {
		transform: scale(1.1) rotate(2deg);
		z-index: 20;
	}
	h3 {
		font-size: 1.8em;
		color: black;
		font-family: 'Bangers', cursive;
		letter-spacing: 1px;
		text-decoration: none;
		all: revert;
	}
`;

const ImageHolder = styled.div`
	img {
		width: 100%;
		display: block;
		object-fit: cover;
	}
`;

const HeroListItem = (props: { key: string; hero: ResultsItem }) => {
	const { hero } = props;
	return (
		<Link to={{ pathname: `/hero/${hero.slug}`, state: { id: hero.id } }}>
			<HeroListItemStyled>
				<h3>{hero.name}</h3>
				<ImageHolder>
					<img src={hero.images.sm} alt={hero.name} />
				</ImageHolder>
			</HeroListItemStyled>
		</Link>
	);
};

export default HeroListItem;
