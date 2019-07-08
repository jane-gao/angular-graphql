export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export namespace UpVersion {
  export type Variables = {
    id: number;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    upVersion: Maybe<UpVersion>;
  };

  export type UpVersion = {
    __typename?: 'Book';

    id: number;

    name: Maybe<string>;

    version: Maybe<number>;
  };
}

export namespace AllBooks {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    books: Maybe<(Maybe<Books>)[]>;
  };

  export type Books = {
    __typename?: 'Book';

    id: number;

    name: Maybe<string>;

    version: Maybe<number>;

    description: Maybe<string>;

    author: Maybe<Author>;
  };

  export type Author = AuthorFragment.Fragment;
}

export namespace GetAuthorById {
  export type Variables = {
    id: number;
  };

  export type Query = {
    __typename?: 'Query';

    author: Maybe<Author>;
  };

  export type Author = AuthorFragment.Fragment;
}

export namespace GetBook {
  export type Variables = {
    id: number;
  };

  export type Query = {
    __typename?: 'Query';

    book: Maybe<Book>;
  };

  export type Book = BookFragment.Fragment;
}

export namespace AuthorFragment {
  export type Fragment = {
    __typename?: 'Author';

    id: number;

    firstName: Maybe<string>;

    lastName: Maybe<string>;
  };
}

export namespace BookFragment {
  export type Fragment = {
    __typename?: 'Book';

    id: number;

    name: Maybe<string>;

    description: Maybe<string>;

    version: Maybe<number>;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

import gql from 'graphql-tag';

// ====================================================
// GraphQL Fragments
// ====================================================

export const AuthorFragmentFragment = gql`
  fragment AuthorFragment on Author {
    id
    firstName
    lastName
  }
`;

export const BookFragmentFragment = gql`
  fragment BookFragment on Book {
    id
    name
    description
    version
  }
`;

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: 'root',
})
export class UpVersionGQL extends Apollo.Mutation<UpVersion.Mutation, UpVersion.Variables> {
  document: any = gql`
    mutation UpVersion($id: Int!) {
      upVersion(bookId: $id) {
        id
        name
        version
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class AllBooksGQL extends Apollo.Query<AllBooks.Query, AllBooks.Variables> {
  document: any = gql`
    query AllBooks {
      books {
        id
        name
        version
        description
        author {
          ...AuthorFragment
        }
      }
    }

    ${AuthorFragmentFragment}
  `;
}
@Injectable({
  providedIn: 'root',
})
export class GetAuthorByIdGQL extends Apollo.Query<GetAuthorById.Query, GetAuthorById.Variables> {
  document: any = gql`
    query GetAuthorById($id: Int!) {
      author(id: $id) {
        ...AuthorFragment
      }
    }

    ${AuthorFragmentFragment}
  `;
}
@Injectable({
  providedIn: 'root',
})
export class GetBookGQL extends Apollo.Query<GetBook.Query, GetBook.Variables> {
  document: any = gql`
    query GetBook($id: Int!) {
      book(id: $id) {
        ...BookFragment
      }
    }

    ${BookFragmentFragment}
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
