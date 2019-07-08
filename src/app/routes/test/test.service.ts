import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';

const allBooks = gql`
  query AllBooks {
    books {
      id
      name
      version
      description
      author{
        ...AuthorFrg
      }
    }
  }`;

const author = gql`
  query GetAuthorById($id: Int!) {
    author (id: $id) {
      ...AuthorFrg
    }
  }
`;

const authorFrg = gql`
  fragment AuthorFrg on Author{
    id
    firstName
    lastName
  }
`;


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private apollo: Apollo) {
  }

  watchAllBooks() {
    return this.apollo.watchQuery<any>({
      query: allBooks
    }).valueChanges;
  }

  queryAuthorById(authorId: number) {
    return this.apollo.query({
      query: author,
      variables: {
        id: authorId
      }
    });
  }

}


