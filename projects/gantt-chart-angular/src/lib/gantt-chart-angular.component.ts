import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'lib-gantt-chart-angular',
  templateUrl: './gantt-chart-angular.component.html',
  styleUrls: ['gantt-chart-angular.component.css']
})
export class GanttChartAngularComponent implements OnInit {

  @ViewChild("chartContainer") chartContainer: ElementRef;
  @Input() config: any = {};

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.generateChart();
    }, 1000);
  }

  /**
   * generate chart
   */
  generateChart() {
    google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(() => {
      var data = new google.visualization.DataTable();

      if (this.config && this.config.columns && this.config.columns.length) {
        this.config.columns.forEach(col => {
          data.addColumn(col.type, col.name);
        });
      }
      const temp = [];
      if (this.config && this.config.data && this.config.data.length) {
        this.config.data.forEach(rowData => {
          const rowsData = [];
          this.config.columns.forEach(col => {
            rowsData.push(rowData[col.field]);
          });
          temp.push(rowsData);
        });
        data.addRows(temp);
      }
  
      var options = {
        height: 275,
        // gantt: {
        //   criticalPathEnabled: false,
        //   innerGridHorizLine: {
        //     stroke: '#ffe0b2',
        //     strokeWidth: 2
        //   },
        //   innerGridTrack: {fill: '#fff3e0'},
        //   innerGridDarkTrack: {fill: '#ffcc80'}
        // }
      };
  
      var chart = new google.visualization.Gantt(this.chartContainer.nativeElement);
  
      chart.draw(data, options);
    });
  }

}
