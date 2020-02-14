import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, cleanup, wait } from '@testing-library/react';
import App, { bookQuery } from './App';

describe('@App', () => {
	const mocks = [
		{
			request: {
				query: bookQuery,
			},
			result: {
				data: {
					books: [{ id: '1', title: 'HarryPotter' }],
				},
			},
		},
	];

	afterEach(cleanup);

	it('renders the app', async () => {
		const { asFragment } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<App />
			</MockedProvider>,
		);

		await wait();

		expect(asFragment()).toMatchSnapshot();
	});
});
