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
<lib-gantt-chart-angular [config]="config"></lib-gantt-chart-angular>
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
    ]
  };
```