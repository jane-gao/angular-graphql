import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import { HttpHeaders } from '@angular/common/http';

const requestPath = 'https://o5x5jzoo7z.sse.codesandbox.io/graphql'; //the test Graphql Server which returns rates
// const requestPath = '/graphql'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink) {
  const http = httpLink.create({ uri: `${requestPath}` });

  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    /*operation.setContext({
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    });*/

    return forward(operation);
  });
  return {
    link: concat(authMiddleware, http),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
