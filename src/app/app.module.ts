import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TestGanttChartModule } from './test-gantt-chart/test-gantt-chart.module';
import { GanttChartAngularModule } from 'projects/gantt-chart-angular/src/public-api';
import { GoogleMapsAngularModule } from 'projects/google-maps-angular/src/dist';
const config = { url: 'http://localhost:9898/', options: {} };



@NgModule({
  declarations: [
  ], exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GanttChartAngularModule,
    TestGanttChartModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
