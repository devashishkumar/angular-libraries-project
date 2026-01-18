import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttChartAngularComponent } from './gantt-chart-angular.component';

@NgModule({
  imports: [CommonModule, GanttChartAngularComponent],
  exports: [GanttChartAngularComponent]
})
export class GanttChartAngularModule { }
