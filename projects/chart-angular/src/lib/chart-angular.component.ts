import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var Chart: any;

@Component({
  selector: 'lib-chart-angular',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chart-angular.component.html',
  styleUrls: ['./chart-angular.component.css']
})
export class ChartAngularComponent implements OnInit {

  chartObj: any;
  @Input() chartConfig: any = {};
  @Input() chartType = '';
  @Input() isLabelShow = true;
  @Output() labelClicked = new EventEmitter();
  @Output() chartClicked = new EventEmitter();
  @ViewChild('chart', {static: false}) chartContainer: ElementRef;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.createChart();
    }, 0);
  }

  /**
   * create chart
   */
  private createChart() {
    const self = this;
    if (!this.chartContainer || !this.chartContainer.nativeElement) {
      return;
    }
    const canvasElem = this.chartContainer.nativeElement as HTMLCanvasElement;
    const ctx = canvasElem.getContext('2d');
    this.chartObj = new Chart(ctx, {
      // The type of chart we want to create
      type: this.chartType,

      // The data for our dataset
      data: this.chartConfig,

      options: {
        legend: {
          display: this.isLabelShow,
          onClick: (e, legendItem) => {
            const labelIndex = legendItem.datasetIndex;
            this.labelClicked.emit({ rowClicked: legendItem });
          }
        },
        onClick(e) {
          const element = this.getElementAtEvent(e);
          if (element && element.length > 0) {
            const datasetLabel = this.config.data.datasets[element[0]._datasetIndex].label;
            const data = this.config.data.datasets[element[0]._datasetIndex].data[element[0]._index];
            self.chartClicked.emit({ label: datasetLabel, index: element[0]._datasetIndex });
          }
        }
      }
    });
  }

  /**
   * animate chart
   */
  private animateChart() {
    this.chartObj.destroy();
    setTimeout(() => {
      this.createChart();
    }, 100);
    
  }

  /**
   * bind click event on chart
   * @param chart chart object
   */
  private bindChartClickEvent(chart) {
    if (!this.chartContainer || !this.chartContainer.nativeElement || !chart) {
      return;
    }
    this.chartContainer.nativeElement.onclick = (evt) => {
      const activePoints = chart.getElementsAtEvent(evt);

      if (activePoints.length > 0) {
        const clickedElementindex = activePoints[0]._index;
        const chartLabel = chart.data.labels[clickedElementindex];
        this.chartClicked.emit({ label: chartLabel, index: clickedElementindex });
      }
    };
  }
}
