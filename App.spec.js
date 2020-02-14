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
					books: [{ id: 1, title: 'HarryPotter' }],
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
	it('renders the loading state', async () => {
		const { getByText } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<App />
			</MockedProvider>,
		);

		const ele = getByText(/Loading.../i);

		expect(ele).toBeTruthy();
	});
	it('renders the error state', async () => {
		const errorMock = [
			{
				request: {
					query: bookQuery,
				},
			},
		];

		const { getByText, debug } = render(
			<MockedProvider mocks={errorMock} addTypename={false}>
				<App />
			</MockedProvider>,
		);

		await wait();
		debug();
		const ele = getByText(/Error/i);

		expect(ele).toBeTruthy();
	});
	// xit('fires mutation', async () => {
	// 	const mutationMock = [
	// 		{
	// 			request: {
	// 				query: bookQuery,
	// 			},
	// 			result: {
	// 				data: {
	// 					books: [{ id: 1, title: 'HarryPotter' }],
	// 				},
	// 			},
	// 		},
	// 		{
	// 			request: {
	// 				query: bookMutation,
	// 			},
	// 			result: {
	// 				data: {
	// 					updateBookTitle: {
	// 						id: 1,
	// 						title: 'New title',
	// 					},
	// 				},
	// 			},
	// 		},
	// 	];

	// 	const { getByText, debug } = render(
	// 		<MockedProvider mocks={mutationMock} addTypename={false}>
	// 			<App />
	// 		</MockedProvider>,
	// 	);

	// 	await wait();
	// 	fireEvent.click(getByText('Update'));
	// 	await wait();

	// 	debug();
	// 	// expect(getByText('New title')).toBeTruthy();
	// });
});
