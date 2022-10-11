/** @format */

import React from 'react';
import { useQuery } from '@tanstack/react-query';

function App() {
	const { data, isLoading } = useQuery(['pokemon'], () =>
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=20').then((res) => res.json()),
	);

	console.log(data);

	return (
		<div className='App'>
			{isLoading ? <p>loading...</p> : data?.results?.map((d: any) => <h4>{d?.name}</h4>)}
		</div>
	);
}

export default App;
