import React from 'react';
import { render } from 'react-dom';
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import App from './App';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: process.env.GRAPHQLURL,
	}),
});

render(
	<ApolloProvider client={client}>
		<GlobalStyle />
		<App />
	</ApolloProvider>,
	document.getElementById('root'),
);
