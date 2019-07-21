import React from 'react';
import { ResultsItem } from '../types/Result';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img from 'react-image';
import Loader from 'react-loader-spinner';

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
		text-shadow: 0.5px 0.5px 0px rgba(0, 0, 0, 0.3);
	}
`;

const ImageHolder = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	min-height: 150px;
	img {
		width: 100%;
		display: block;
		object-fit: cover;
	}
	svg {
		max-width: 50%;
		position: absolute;
		display: inline-block;
		top: 40%;
		right: 37%;
		vertical-align: center;
		transform: rotate(1deg);
	}
`;

const HeroListItem = (props: { key: string; hero: ResultsItem }) => {
	const { hero } = props;
	return (
		<Link
			to={{ pathname: `/hero/${hero.slug}`, state: { id: hero.id } }}
			style={{ textDecoration: 'none' }}
		>
			<HeroListItemStyled>
				<h3>{hero.name}</h3>
				<ImageHolder>
					<Img
						src={hero.images.sm}
						loader={
							<Loader type="Triangle" color="#393A3C" height="50" width="50" />
						}
					/>
				</ImageHolder>
			</HeroListItemStyled>
		</Link>
	);
};

export default HeroListItem;
