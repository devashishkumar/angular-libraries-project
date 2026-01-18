import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GanttChartAngularModule } from 'projects/gantt-chart-angular/src/public-api';

@Component({
  selector: 'codewithashish-gantt-chart',
  standalone: true,
  imports: [CommonModule, FormsModule, GanttChartAngularModule],
  templateUrl: './test-gantt-chart.component.html',
  styleUrls: ['./test-gantt-chart.component.css']
})
export class TestGanttChartComponent implements OnInit {

  constructor() { }
  config = {
    columns: [
      {type: 'string', name: 'ID', field: 'id'},
      {type: 'string', name: 'Name', field: 'name'},
      {type: 'date', name: 'Start Date', field: 'startDate'},
      {type: 'date', name: 'End Date', field: 'endDate'},
      {type: 'number', name: 'Duration', field: 'duration'},
      {type: 'number', name: 'Percentage Complete', field: 'percentComplete'},
      {type: 'string', name: 'Pending Reasons', field: 'pendingReasons'}
    ], data: [
      {
        id: 'setup',
        name: 'Angular',
        startDate: new Date(2021, 2, 10),
        endDate: new Date(2021, 2, 11),
        duration: 2,
        percentComplete:  100,
        pendingReasons: null
      }, {
        id: 'Start Development',
        name: 'Login Feature',
        startDate: new Date(2021, 2, 13),
        endDate: new Date(2021, 2, 14),
        duration: 2,
        percentComplete:  0,
        pendingReasons: null
      },{
        id: 'Test',
        name: 'Test Login Feature',
        startDate: new Date(2021, 2, 16),
        endDate: new Date(2021, 2, 17),
        duration: 2,
        percentComplete:  0,
        pendingReasons: null
      }, {
        id: 'Deploy',
        name: 'Deploy to server',
        startDate: new Date(2021, 2, 18),
        endDate: new Date(2021, 2, 18),
        duration: 1,
        percentComplete:  0,
        pendingReasons: null
      }
    ],
    options: {
      height: 275,
      gantt: {
        criticalPathEnabled: false,
        innerGridHorizLine: {
          stroke: '#ffe0b2',
          strokeWidth: 2
        },
        innerGridTrack: {fill: '#fff3e0'},
        innerGridDarkTrack: {fill: '#ffcc80'}
      }
    }
  }

  ngOnInit(): void {

  }

  /**
   * handle gantt chart click event
   * @param data object
   */
  clickEventHandler(data) {
    console.log(data, '78');
  }

}
