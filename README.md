# AngularGarphQLDemo

This project was generated with
[Angular CLI](https://github.com/angular/angular-cli) version 7.3.3. 

I use [NG-ZORRO](https://ng.ant.design/components/avatar/en) version
7.5.1 in this project for UI.

It is a Apollo Angular and GraphQl Code Generation Example.

## Add apollo-angular
To start using Apollo Angular simply run:
```
ng add apollo-angular
```

It will help you add the following packages simply: 

`apollo-client`: Where the magic happens

`apollo-angular`: Bridge between Angular and Apollo Client

`apollo-cache-inmemory`: Our recommended cache

`apollo-angular-link-http`: An Apollo Link for remote data fetching

`graphql`: Second most important package

`graphql-tag`: Parses your strings to GraphQL documents

## Write graphql by yourself

Write like in file `https://github.com/jane-gao/angular-graphql/blob/master/src/app/routes/test/write.component.ts`, also you
can write the gql in another file you like, and import it. 


## Code Generation

There's a tool to generate a ready to use in your component, strongly typed Angular services, for every defined query, mutation or subscription.

In short, you define a query in .graphql file so your IDE gives you autocompletion and validation.

let's install some packages: 

```
 npm install --save -D graphql-code-generator \
  graphql-codegen-introspection \
  graphql-codegen-typescript-apollo-angular \
  graphql-codegen-typescript-client \
  graphql-codegen-typescript-common
 ```
 
## Generate GQL
1.  Define `schema.graphql` file.
2.  Setup codegen.yml
3.  Create `.graphql` files to write graphql grammer
4.  Create a new file for generated GQL
5.  Run `npm run gql` then generate GQL & schema.json

Code generation tool outputs to a file, a fully featured service with
every interface you will need. Like
`https://github.com/jane-gao/angular-graphql/blob/master/src/app/graphql/graphql.ts`

To learn more about the tool, please read the [Apollo-Angular 1.2  —
 using GraphQL in your apps just got a whole lot easier!](https://medium.com/the-guild/apollo-angular-code-generation-7903da1f8559)
article or go straight to [documentation](https://graphql-code-generator.com/docs/plugins/typescript-apollo-angular).

## Use generated GQL

Use GQL like in this file `https://github.com/jane-gao/angular-graphql/blob/master/src/app/routes/test/auto.component.ts`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
