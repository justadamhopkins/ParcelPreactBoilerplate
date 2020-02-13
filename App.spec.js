import { h } from 'preact';
import { render, cleanup } from '@testing-library/preact';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client';
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
	it('renders the app', () => {
		const { asFragment } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<App />
			</MockedProvider>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
