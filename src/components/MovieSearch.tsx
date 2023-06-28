'use client';
import React, { useState } from 'react';
import { searchMovies } from '@/services/MovieApi';
import MovieCard from './MovieCard';
import Search from './Search';

const MovieSearch = () => {
	const [movies, setMovies] = useState([]);

	const handleSearch = async (query: string) => {
		const results = await searchMovies(query);
		setMovies(results);
	};

	return (
		<div>
			<Search onSearch={handleSearch} />
			<div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{movies.map((movie: any) => (
					<MovieCard
						key={movie.id}
						title={movie.title}
						overview={movie.overview}
						posterPath={movie.poster_path}
					/>
				))}
			</div>
		</div>
	);
};

export default MovieSearch;
