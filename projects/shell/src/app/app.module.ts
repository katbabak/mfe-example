import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {APP_ROUTES, FIRST_SERVICE_TOKEN} from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import {CommunicationService} from "gx-core";


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [
    {
      provide: FIRST_SERVICE_TOKEN,
      useClass: CommunicationService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
