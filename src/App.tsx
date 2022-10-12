/** @format */

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from './components/Button';

function App() {
	const { data, isLoading } = useQuery(['pokemon'], () =>
		fetch('https://pokeapi.co/api/v2/pokemon/18').then((res) => res.json()),
	);

	return (
		<>
			<div className='App'>{isLoading ? <p>loading...</p> : <h4>{data.name}</h4>}</div>
			<Button />
		</>
	);
}

export default App;
