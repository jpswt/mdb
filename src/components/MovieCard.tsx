import React from 'react';

interface CardProps {
	title: string;
	overview: string;
	posterPath: string;
}

const MovieCard = ({ title, overview, posterPath }: CardProps) => {
	const imageUrl = posterPath
		? `https://image.tmdb.org/t/p/w500${posterPath}`
		: '/no-image-available.png';
	return (
		<div className="rounded bg-white p-4 shadow">
			<img className="mb-4 h-64 w-full rounded" src={imageUrl} alt={title} />
			<h2 className="mb-2 text-2xl font-bold">{title}</h2>
			<p className="text-sm text-gray-500">{overview.substring(0, 100)}</p>
		</div>
	);
};

export default MovieCard;
