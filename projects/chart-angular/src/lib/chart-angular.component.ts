import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var Chart: any;

@Component({
  selector: 'lib-chart-angular',
  templateUrl: './chart-angular.component.html',
  styleUrls: ['./chart-angular.component.css']
})
export class ChartAngularComponent implements OnInit {

  divId = '';
  chartObj: any;
  @Input() chartConfig: any = {};
  @Input() chartType = '';
  @Input() isLabelShow = true;
  @Output() labelClicked = new EventEmitter();
  @Output() chartClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.divId = this.generateDynamicString(10);
    setTimeout(() => {
      this.createChart();
    }, 0);
  }

  /**
   * generate random string as per passed number length
   * @param length number
   */
  private generateDynamicString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return result;
  }

  /**
   * create chart
   */
  private createChart() {
    const self = this;
    if (!document.getElementById(this.divId)) {
      return;
    }
    const canvasElem = document.getElementById(this.divId) as HTMLCanvasElement;
    const ctx = canvasElem.getContext('2d');
    // Chart.defaults.global.legend.display = this.isLabelShow;
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
          if (element.length > 0) {
            const datasetLabel = this.config.data.datasets[element[0]._datasetIndex].label;
            const data = this.config.data.datasets[element[0]._datasetIndex].data[element[0]._index];
            self.chartClicked.emit({ label: datasetLabel, index: element[0]._datasetIndex });
          }
        }
      }
    });
    // this.bindChartClickEvent(chart);
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
    if (!document.getElementById(this.divId) || !chart) {
      return;
    }
    document.getElementById(this.divId).onclick = (evt) => {
      const activePoints = chart.getElementsAtEvent(evt);

      if (activePoints.length > 0) {
        const clickedElementindex = activePoints[0]._index;
        const chartLabel = chart.data.labels[clickedElementindex];
        this.chartClicked.emit({ label: chartLabel, index: clickedElementindex });
      }
    };
  }
}
