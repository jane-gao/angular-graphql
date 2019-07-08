import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { Pattern } from './util/pattern';
import { Setting } from './setting/setting';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    Pattern, //正则
    Setting, //基本属性配置
  ],
})
export class PublicModule {
  constructor(@Optional() @SkipSelf() parentModule: PublicModule) {
    throwIfAlreadyLoaded(parentModule, 'PublicModule');
  }
}
