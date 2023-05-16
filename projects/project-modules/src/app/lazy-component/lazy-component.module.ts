import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponentRoutingModule } from './lazy-component-routing.module';
import { LazyComponentComponent } from './lazy-component.component';
import { LazyCommonModule } from '../lazy-common/lazy-common.module';


@NgModule({
  declarations: [
    LazyComponentComponent
  ],
  imports: [
    CommonModule,
    LazyCommonModule,
    LazyComponentRoutingModule
  ]
})
export class LazyComponentModule { }
