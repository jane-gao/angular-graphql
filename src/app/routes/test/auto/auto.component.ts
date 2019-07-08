import { Component, OnInit } from '@angular/core';
import {Subscription} from 'apollo-client/util/Observable';
import {Apollo} from 'apollo-angular';
import {AllBooksGQL, GetAuthorByIdGQL} from '../../../graphql/graphql';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.less']
})
export class AutoComponent implements OnInit {
  error: any = '';
  books: any;
  author: any;
  loading: boolean;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo,
              private allBooksGQL: AllBooksGQL,
              private getAuthorByIdGQL: GetAuthorByIdGQL) {
  }

  ngOnInit() {
  }

  watchBooks() {
    this.querySubscription = this.allBooksGQL.watch().valueChanges
      .subscribe(({data, loading, errors}) => {
        this.books = data.books;
        this.loading = loading;
        this.error = errors;
      });
  }

  getAuthor() {
    this.author = this.getAuthorByIdGQL.fetch({id: 1}).subscribe(result => {
      let author = result.data;
      console.log("█ this.author ►►►", author);
    });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}

