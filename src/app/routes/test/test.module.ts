import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrencyComponent} from './currency/currency.component';
import {RouterModule, Routes} from '@angular/router';
import {WriteComponent} from './write/write.component';
import {AutoComponent} from './auto/auto.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

const routes: Routes = [
  {path: '', component: CurrencyComponent},
];

@NgModule({
  declarations: [CurrencyComponent, WriteComponent, AutoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule
  ]
})
export class TestModule {
}
