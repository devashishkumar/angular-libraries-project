import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GoogleMapsAngularComponent} from './../../projects/google-maps-angular/src/lib/google-maps-angular.component';
// import { GoogleMapsAngularModule } from 'google-maps-angular';
import {FileUploadAngularComponent} from './../../projects/file-upload-angular/src/lib/file-upload-angular.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsAngularComponent,
    FileUploadAngularComponent
  ], exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // GoogleMapsAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
