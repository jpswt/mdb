'use client';
import { ChangeEvent, FormEvent, useState } from 'react';

interface SearchBarProps {
	onSearch: (query: string) => void;
}

const Search = ({ onSearch }: SearchBarProps) => {
	const [query, setQuery] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setQuery(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex w-screen max-w-3xl items-center justify-center"
		>
			<input
				type="text"
				className=" w-full rounded-l border border-gray-400 px-4 py-2 text-black focus:border-blue-500 focus:outline-none"
				value={query}
				onChange={handleChange}
			/>
			<button
				type="submit"
				className="hover:bg-blue:600 rounded-r bg-teal-500 px-6 py-2 text-white focus:outline-none"
			>
				Search
			</button>
		</form>
	);
};

export default Search;
