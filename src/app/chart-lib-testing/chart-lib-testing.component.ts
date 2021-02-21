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
    }, {
      label: 'March',
      backgroundColor: 'purple',
      borderColor: 'rgb(255, 99, 132)',
      data: [35, 43, 45]
    }]
  };

  pieChartConfig = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
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

  doughnutChartConfig = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
  };

  polarChartConfig = {
    datasets: [{
      data: [
        11,
        16,
        7,
        3,
        14
      ],
      backgroundColor: [
        "#FF6384",
        "#4BC0C0",
        "#FFCE56",
        "#E7E9ED",
        "#36A2EB"
      ],
      label: 'My dataset'
    }],
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May"
    ]
  };

  radarChartConfig = {
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

  barChartConfig = {
    labels: ["Tokyo", "Mumbai", "Mexico City", "Shanghai", "Sao Paulo"],
    datasets: [{
      label: 'Tokyo', // Name the series
      data: [22006299, 15834918, 14919501, 14797756, 14433147], // Specify the data values array
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
      label: 'Mumbai', // Name the series
      data: [120000, 15000000, 1454210, 240124, 3358452], // Specify the data values array
      backgroundColor: '#f443368c',
      borderColor: '#f443368c',
      borderWidth: 1, // Specify bar border width
      type: 'line', // Set this data to a line chart
      fill: false
    },
    {
      label: 'Mexico City', // Name the series
      data: [5024554, 2001424, 4454201, 4565420, 5659888], // Specify the data values array
      backgroundColor: '#2196f38c',
      borderColor: '#2196f38c',
      borderWidth: 1, // Specify bar border width

      fill: false
    }]
  }

  bubbleChartConfig = {
    datasets: [
      {
        label: 'Label1',
        data: [
          {
            x: 3,
            y: 7,
            r: 10
          }
        ],
        backgroundColor: "#ff6384",
        hoverBackgroundColor: "#ff6384"
      },
      {
        label: 'Label2',
        data: [
          {
            x: 6,
            y: 2,
            r: 10
          }
        ],
        backgroundColor: "#ff6384",
        hoverBackgroundColor: "#ff6384"
      },
      {
        label: 'Label3',
        data: [
          {
            x: 2,
            y: 6,
            r: 10
          }
        ],
        backgroundColor: "#ff6384",
        hoverBackgroundColor: "#ff6384"
      },
      {
        label: 'Label4',
        data: [
          {
            x: 5,
            y: 3,
            r: 10
          }
        ],
        backgroundColor: "#ff6384",
        hoverBackgroundColor: "#ff6384"
      },
      {
        label: 'Label5',
        data: [
          {
            x: 2,
            y: 1,
            r: 10
          }
        ],
        backgroundColor: "#ff6384",
        hoverBackgroundColor: "#ff6384"
      },
      {
        label: 'Label6',
        data: [
          {
            x: 1,
            y: 3,
            r: 10
          }
        ],
        backgroundColor: "#ff6384",
        hoverBackgroundColor: "#ff6384"
      },
      {
        label: 'Label7',
        data: [
          {
            x: 1,
            y: 1,
            r: 10
          }
        ],
        backgroundColor: "#ff6384",
        hoverBackgroundColor: "#ff6384"
      },
      {
        label: 'Label8',
        data: [
          {
            x: 1,
            y: 2,
            r: 10
          }
        ],
        backgroundColor: "#ff6384",
        hoverBackgroundColor: "#ff6384"
      }
    ]
  };

  scatterChartConfig = {
    datasets: [{
      label: 'Label1',
      backgroundColor: "#ff6384",
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }]
    },{
      label: 'Label2',
      backgroundColor: "#ff6384",
      data: [{
        x: -20,
        y: 5
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }]
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
