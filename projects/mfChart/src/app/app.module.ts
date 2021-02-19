import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChartExampleModule} from "./chart-example/chart-example.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
