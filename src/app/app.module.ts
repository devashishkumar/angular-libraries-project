import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FileUploadAngularComponent} from './../../projects/file-upload-angular/src/lib/file-upload-angular.component';
import {ChartAngularComponent} from './../../projects/chart-angular/src/lib/chart-angular.component';

import { FormsModule } from '@angular/forms';
import { ChartLibTestingComponent } from './chart-lib-testing/chart-lib-testing.component';
import { TestFileSaverComponent } from './test-file-saver/test-file-saver.component';
import { TestGanttChartModule } from './test-gantt-chart/test-gantt-chart.module';
import { GanttChartAngularModule } from 'projects/gantt-chart-angular/src/public-api';
import { GoogleMapsAngularModule } from 'projects/google-maps-angular/src/dist';
import { AngularSocketModule } from 'projects/angular-socket/src/public-api';
import { SocketIoNgxModule } from 'projects/socket-io-ngx/src/public-api';
const config = { url: 'http://localhost:9898/', options: {} };



@NgModule({
  declarations: [
    ChartLibTestingComponent,
    ChartAngularComponent,
    TestFileSaverComponent
  ], exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GanttChartAngularModule,
    AngularSocketModule.forRoot(config),
    SocketIoNgxModule.forRoot(config),
    TestGanttChartModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
