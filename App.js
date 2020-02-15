import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import styled from 'styled-components';

export const bookQuery = gql`
	query {
		books {
			id
			title
		}
	}
`;

export const bookMutation = gql`
	mutation {
		updateBookTitle(id: 1, title: "New title") {
			id
			title
		}
	}
`;

const Wrapper = styled.section`
	background: #5f94e8;
	color: white;
	font-weight: bold;
	letter-spacing: 2px;
	height: 100%;
	padding: 20px;
`;

const Title = styled.h1`
	font-size: 25px;
	text-align: center;
	text-decoration: underline;
`;
const Button = styled.button``;

const App = () => {
	const { error, loading, data } = useQuery(bookQuery);
	const [update] = useMutation(bookMutation);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<Wrapper>
			<Title>{`Hello from React and the environment is ${process.env.ENVIRONMENT}`}</Title>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			<Button
				type='button'
				onClick={() => {
					update();
				}}
			>
				Update
			</Button>
		</Wrapper>
	);
};

export default App;
