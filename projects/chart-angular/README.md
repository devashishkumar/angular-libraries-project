### Documentation

This library is used to generate charts in your angular application in an easiest way

### Installation

First we need to add chart.js file in application index.html file

```sh
npm install chart-angular
```

### in app.module following changes required

import { ChartAngularModule } from 'chart-angular';
import library and use ChartAngularModule in imports array

### How we use chart library in our application

<chart-angular [chartConfig]="chartConfig" [chartType]="'line'" (labelClicked)="ourMethod($event)"
    [isLabelShow]="true" (chartClicked)="chartClickedEvent($event)"></chart-angular>

### line/bar will be input in the following format

```sh
chartConfig = {
    labels: ["Tokyo", "Mumbai", "Mexico City", "Shanghai", "Sao Paulo"],
    datasets: [{
      label: 'Population', // Name the series
      data: [22006299, 15834918, 14919501, 14797756, 14433147],
      backgroundColor: [ // Specify custom colors
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderWidth: 1 // Specify bar border width
    },
    {
      label: 'Second Label', 
      data: [120000, 15000000, 1454210, 240124, 3358452],
      backgroundColor: '#f443368c',
      borderColor: '#f443368c',
      borderWidth: 1,
      type: 'line',
      fill: false
    },
    {
      label: 'Third Label',
      data: [5024554, 2001424, 4454201, 4565420, 5659888],
      backgroundColor: '#2196f38c',
      borderColor: '#2196f38c',
      borderWidth: 1,
      type: 'line',
      fill: false
    }]
  };
```

### For Pie/doughnut Chart config should be in below format
```sh
chartConfig = {
    labels: ['Jan','Feb','Mar', 'Apr'],
    datasets: [
        {
            data: [100, 80, 60, 40],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#EF09OM"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#EF09OM"
            ]
        }]    
    };
```

### polarArea chart config
```sh
chartConfig = {
    datasets: [{
      data: [
        15,
        10,
        8,
        4,
        2
      ],
      backgroundColor: [
        "#FF6384",
        "#4BC0C0",
        "#FFCE56",
        "#E7E9ED",
        "#36A2EB"
      ],
      label: 'Polar Area Chart Dataset'
    }],
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May"
    ]
  };
```

### radar chart config
```sh
chartConfig = {
    labels: ['Label1', 'Label2', 'Label3', 'Label4'],
    datasets: [
        {
            label: 'First Label Dataset',
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [10, 20, 30, 40]
        },
        {
            label: 'Second Label Dataset',
            backgroundColor: 'purple',
            borderColor: 'brown',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19]
        },
        {
            label: 'Third Label Dataset',
            backgroundColor: 'blue',
            borderColor: 'blue',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [30, 40, 50, 60]
        }
    ]
};
```

### chartType will be input used to display type of chart like pie/bar/line

### isLabelShow will be true/false, by default it's true in case we want to display labels othewise false

### Inputs

| Input | Purpose |
| ------ | ------ |
| chartConfig:required | chart config including data, styles, labels |
| chartType:required | Type of chart like line, pie, bar, doughnut, polarArea, radar |
| isLabelShow:optional | boolean, it's true in case we want to display labels othewise false |

### Events

| Output | Purpose |
| ------ | ------ |
| labelClicked | This emitter will trigger when user click on any particular chart label and return that particular label information|
| chartClicked | This emitter will trigger when user click on any specific chart section and return that particular section information|

