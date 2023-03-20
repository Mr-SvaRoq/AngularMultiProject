import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { B1Component } from './component/b1/b1.component';
import { B2Component } from './component/b2/b2.component';
import { B3Component } from './component/b3/b3.component';

@NgModule({
  declarations: [
    AppComponent,
    B2Component,
    B3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    B1Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
