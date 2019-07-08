import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html'
})
export class CurrencyComponent implements OnInit {
  rates: any[];
  loading = true;
  error:any;

  // inject it
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getRates();
  }

  getRates(){
    this.apollo
    .watchQuery({
      query: gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `,
    })
    .valueChanges.subscribe((result:any) => {
      this.rates = result.data && result.data.rates;
      this.loading = result.loading;
      this.error = result.errors;
    });
  }
}
