import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart-lib-testing',
  templateUrl: './chart-lib-testing.component.html',
  styleUrls: ['./chart-lib-testing.component.css']
})
export class ChartLibTestingComponent implements OnInit {

  chartConfig: any = {
    labels: ['January', 'February', 'March'],
    datasets: [{
      label: 'January',
      backgroundColor: 'yellow',
      borderColor: 'rgb(255, 99, 132)',
      data: [5, 10, 15]
    },
    {
      label: 'Febrauary',
      backgroundColor: 'brown',
      borderColor: 'rgb(255, 99, 132)',
      data: [20, 25, 30]
    },{
      label: 'March',
      backgroundColor: 'purple',
      borderColor: 'rgb(255, 99, 132)',
      data: [35, 43, 45]
    }]
  };

  pieChartConfig = {
    labels: ['Jan','Feb','Mar', 'Apr'],
    datasets: [
        {
            data: [300, 50, 100, 80],
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

  constructor() { }

  ngOnInit(): void {
  }

  ourMethod(data) {
    window.console.log(data, '32');
  }

  chartClicked(data) {
    window.console.log(data, '32');
  }

}
