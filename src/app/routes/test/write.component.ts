import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'apollo-client/util/Observable';
import {Apollo} from 'apollo-angular';
import {TestService} from './test.service';

@Component({
  selector: 'app-write',
  template: `<div class="panel-body">
    <button nz-button class="m" (click)="watchBooks()">books</button>
    <button nz-button class="m" (click)="getAuthor()">getAuthor</button>
  </div>`,
})
export class WriteComponent implements OnInit, OnDestroy{
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

