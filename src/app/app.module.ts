import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GoogleMapsAngularComponent} from './../../projects/google-maps-angular/src/lib/google-maps-angular.component';
// import { GoogleMapsAngularModule } from 'google-maps-angular';
import {FileUploadAngularComponent} from './../../projects/file-upload-angular/src/lib/file-upload-angular.component';
import {ChartAngularComponent} from './../../projects/chart-angular/src/lib/chart-angular.component';

import { FormsModule } from '@angular/forms';
import { ChartLibTestingComponent } from './chart-lib-testing/chart-lib-testing.component';
import { TestFileSaverComponent } from './test-file-saver/test-file-saver.component';
import { TestGanttChartComponent } from './test-gantt-chart/test-gantt-chart.component';
import { GanttChartAngularModule } from 'projects/gantt-chart-angular/src/public-api';



@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsAngularComponent,
    FileUploadAngularComponent,
    ChartLibTestingComponent,
    ChartAngularComponent,
    TestFileSaverComponent,
    TestGanttChartComponent
  ], exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GanttChartAngularModule
    // GoogleMapsAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
