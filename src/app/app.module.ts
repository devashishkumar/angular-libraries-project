import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GoogleMapsAngularComponent} from './../../projects/google-maps-angular/src/lib/google-maps-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
