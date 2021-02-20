import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var Chart: any;

@Component({
  selector: 'chart-angular',
  templateUrl: './chart-angular.component.html',
  styleUrls: ['./chart-angular.component.css']
})
export class ChartAngularComponent implements OnInit {

  divId = '';
  @Input() chartConfig: any = {};
  @Input() chartType: string = '';
  @Input() isLabelShow: boolean = true;
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
  generateDynamicString(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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
  createChart() {
    const self = this;
    if (!document.getElementById(this.divId)) {
      return;
    }
    const canvasElem = document.getElementById(this.divId) as HTMLCanvasElement;
    const ctx = canvasElem.getContext('2d');
    // Chart.defaults.global.legend.display = this.isLabelShow;
    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: this.chartType,

      // The data for our dataset
      data: this.chartConfig,

      // Configuration options go here
      options: {
        legend: {
          display: this.isLabelShow,
          onClick: (e, legendItem) => {
            const labelIndex = legendItem.datasetIndex;
            this.labelClicked.emit({ rowClicked: legendItem });
          }
        },
        onClick: function (e) {
          var element = this.getElementAtEvent(e);

          // If you click on at least 1 element ...
          if (element.length > 0) {
            var datasetLabel = this.config.data.datasets[element[0]._datasetIndex].label;
            var data = this.config.data.datasets[element[0]._datasetIndex].data[element[0]._index];
            self.chartClicked.emit({ label: datasetLabel, index: element[0]._datasetIndex });
          }
        }
      }
    });
    // this.bindChartClickEvent(chart);
  }

  /**
   * bind click event on chart
   * @param chart chart object
   */
  bindChartClickEvent(chart) {
    if (!document.getElementById(this.divId) || !chart) {
      return;
    }
    document.getElementById(this.divId).onclick = (evt) => {
      var activePoints = chart.getElementsAtEvent(evt);

      if (activePoints.length > 0) {
        //get the internal index of slice in pie chart
        const clickedElementindex = activePoints[0]["_index"];

        //get specific label by index 
        const label = chart.data.labels[clickedElementindex];

        window.console.log(activePoints, clickedElementindex, label, '92');

        //get value by index      
        // const value = chart.data.datasets[0].data[clickedElementindex];
        this.chartClicked.emit({ label: label, index: clickedElementindex });

        /* other stuff that requires slice's label and value */
      }
    }
  }

}
