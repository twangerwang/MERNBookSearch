import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
            email
        }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookToSave: BookInput!) {
    saveBook(bookToSave: $bookToSave) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        descriptions
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookToDelete: ID!) {
    removeBook(bookToDelete: $bookToDelete) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        descriptions
      }
    }
  }
`;
