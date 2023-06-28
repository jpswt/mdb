import MovieSearch from '@/components/MovieSearch';
import Head from 'next/head';

export default function Home() {
	return (
		<div className="min-h-screen bg-black">
			<Head>
				<title>Movie Database</title>
				<meta name="description" content="A simple movie database" />
			</Head>
			<main className="container mx-auto flex flex-col items-center justify-center px-4 py-10">
				<h1 className="mb-8 text-4xl font-bold text-white">Movie DB</h1>
				<MovieSearch />
			</main>
		</div>
	);
}
