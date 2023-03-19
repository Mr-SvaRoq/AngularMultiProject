import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './component/c1/c1.component';
import { C2Component } from './component/c2/c2.component';
import { C3Component } from './component/c3/c3.component';
import { A1Component } from '../../../project-a/src/app/component/a1/a1.component';
import { A3Component } from '../../../project-a/src/app/component/a3/a3.component';

@NgModule({
	declarations: [
		AppComponent,
		C1Component,
		C2Component,
		C3Component,
    A3Component
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	exports: [
		C1Component
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
