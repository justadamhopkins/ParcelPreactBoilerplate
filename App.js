import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import styled from "styled-components"

export const bookQuery = gql`
  query {
    books {
      id
      title
    }
  }
`

export const bookMutation = gql`
  mutation {
    updateBookTitle(id: 1, title: "The Beach") {
      id
      title
    }
  }
`

const Wrapper = styled.section`
  background-color: #5f94e8;
  color: white;
  letter-spacing: 2px;
  height: 100%;
  padding: 20px;
`

const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  text-decoration: underline;
  padding-bottom: 20px;
`

const BookSections = styled.div`
  display: inline-block;
  width: 50%;
  text-align: center;
`

const Button = styled.button`
  max-width: 130px;
  width: 100%;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background-color: #bfbfbf;
  border: 1px solid #000;
  border-radius: 6%;
  margin: 10px auto;
  padding: 5px;
  text-align: center;
  display: block;
`

const App = () => {
  const { error, loading, data } = useQuery(bookQuery)
  const [update] = useMutation(bookMutation)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Wrapper>
      <Title>{`Welcome to the Parcel js, Apollo and GraphQL boilerplate. The env is ${process.env.ENVIRONMENT}.`}</Title>
      <div>
        {data.books.map((book) => (
          <BookSections key={book.id}>
            <p>{book.title}</p>
          </BookSections>
        ))}
      </div>
      <Button
        type="button"
        onClick={() => {
          update()
        }}
      >
        Update
      </Button>
    </Wrapper>
  )
}

export default App
