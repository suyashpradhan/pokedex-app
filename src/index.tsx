/** @format */

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const client = new QueryClient();

root.render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<ReactQueryDevtools position='bottom-left' />
			<App />
		</QueryClientProvider>
	</React.StrictMode>,
);
