### Documentation

This library is used to generate gantt chart in angular application

### Installation

```sh
First we need to add gantt chart javascript file from google cdn and add in application index.html file
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
```

```sh
npm install gantt-chart-angular
```

### import GanttChartAngularModule in app.module

```sh
import { GanttChartAngularModule } from 'gantt-chart-angular';
imports: [
    GanttChartAngularModule
  ]
```

### gantt-chart-angular library usage in our application

```sh
<gantt-chart-angular [config]="config" (onClick)="clickEventHandler($event)"></gantt-chart-angular>
```

### config format in which we will pass columns and data as array
```sh
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
  };
```

### Inputs

| Input | Type | Required/Optional | Uses |
| ------ | ------ | ------ | ------ |
| config | object | required | configuration including chart columns, data and options like chart style |

### Events

| Output | Uses |
| ------ | ------ |
| onClick | Emitter will trigger when user click on any particular row and return information of clicked row|