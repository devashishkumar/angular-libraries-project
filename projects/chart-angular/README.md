### Documentation

This library is used to generate charts in your angular application in an easiest way

### Installation

```sh
npm install chart-angular
```

### in app.module following changes required

import { ChartAngularModule } from 'chart-angular';
import library and use ChartAngularModule in imports array

### How we use chart library in our application

<chart-angular [chartConfig]="chartConfig" [chartType]="'line'" (labelClicked)="ourMethod($event)"
    [isLabelShow]="true"></chart-angular>

### chartConfig will be input in the following format

chartConfig = {
    {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'January',
      backgroundColor: 'yellow',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 15, 20, 25, 30, 35]
    }]
  };

### chartType will be input used to display type of chart like line, pie and so on

### isLabelShow will be true/false, by default it's true in case we want to display labels othewise false

### Inputs

| Input | Purpose |
| ------ | ------ |
| chartConfig:required | chart config including data, styles, labels |
| chartType:required | Type of chart like line/pie and so on |
| isLabelShow:optional | boolean, it's true in case we want to display labels othewise false |

### Events

| Output | Purpose |
| ------ | ------ |
| labelClicked | This emitter will trigger when user click on any particular chart label and return that particular label information|

