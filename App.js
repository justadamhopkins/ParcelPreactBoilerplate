import { h } from 'preact';
import { useQuery, useMutation, gql } from '@apollo/client';

const query = gql`
  query {
    books {
      id
      title
    }
  }
`;

const mutation = gql`
  mutation {
    updateBookTitle(id: 1, title: "New title") {
      id
      title
    }
  }
`;

const App = () => {
  const { error, loading, data } = useQuery(query);
  const [update] = useMutation(mutation);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <h1>Hello from Preact</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button
        type="button"
        onClick={() => {
          update();
        }}
      >
        Update
      </button>
    </div>
  );
};

export default App;
