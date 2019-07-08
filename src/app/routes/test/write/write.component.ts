import { Component, OnInit } from '@angular/core';
import {Subscription} from 'apollo-client/util/Observable';
import {Apollo} from 'apollo-angular';
import {AllBooksGQL, GetAuthorByIdGQL} from '../../../graphql/graphql';
import {TestService} from '../test.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.less']
})
export class WriteComponent implements OnInit {
  error: any = '';
  books: any;
  author: any;
  loading: boolean;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo,
              private testService:TestService) {
  }

  ngOnInit() {
  }

  watchBooks() {
    this.querySubscription = this.testService.watchAllBooks()
      .subscribe(({data, loading, errors}) => {
        this.books = data.books;
        this.loading = loading;
        this.error = errors;
      });
  }

  getAuthor() {
    this.author = this.testService.queryAuthorById(1).subscribe(result => {
      let author = result.data;
      console.log("█ this.author ►►►", author);
    });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}

