import axios from 'axios';

export const getAllSuperHeroes = () => {
	return axios.get(`http://localhost:5000/all`);
};

export const getSingleSuperHero = (id: number) => {
	return axios.get(`http://localhost:5000/`, { params: { id } });
};
