import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart-lib-testing',
  templateUrl: './chart-lib-testing.component.html',
  styleUrls: ['./chart-lib-testing.component.css']
})
export class ChartLibTestingComponent implements OnInit {

  lineChartConfig: any = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'January',
      backgroundColor: 'yellow',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    },
    {
      label: 'Febrauary',
      backgroundColor: 'brown',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 20, 5, 2, 20, 30, 45]
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

  ourMethod(data) {
    window.console.log(data, '32');
  }

}
