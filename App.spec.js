import { h } from 'preact';
import { render, cleanup } from '@testing-library/preact';
import '@testing-library/jest-dom';
import App from './App';

describe('@App', () => {
	afterEach(cleanup);
	it('renders the app', () => {
		const { asFragment } = render(<App />);
		expect(asFragment()).toMatchSnapshot();
	});
});
