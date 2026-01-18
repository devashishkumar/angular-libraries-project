import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var google: any;

@Component({
  selector: 'gantt-chart-angular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gantt-chart-angular.component.html',
  styleUrls: ['gantt-chart-angular.component.css']
})
export class GanttChartAngularComponent implements OnInit {

  @ViewChild("chartContainer") chartContainer: ElementRef;
  @Input() config: any = {};
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.generateChart();
    }, 1000);
  }

  /**
   * generate chart
   */
  private generateChart() {
    google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(() => {
      const data = new google.visualization.DataTable();

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
      const options = this.config.options;
  
      const chart = new google.visualization.Gantt(this.chartContainer.nativeElement);
      chart.draw(data, options);
      google.visualization.events.addListener(chart, 'select', () => {
        const selection = chart.getSelection();
        this.onClick.emit({selectedRow: selection[0]});
      });
    });
  }

}
