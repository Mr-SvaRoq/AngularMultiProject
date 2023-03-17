import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A1Component } from './component/a1/a1.component';
import { A2Component } from './component/a2/a2.component';
import { A3Component } from './component/a3/a3.component';

@NgModule({
  declarations: [
    AppComponent,
    A1Component,
    A2Component,
    A3Component
  ],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
