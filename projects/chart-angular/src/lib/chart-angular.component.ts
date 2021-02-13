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
    const canvasElem = document.getElementById(this.divId) as HTMLCanvasElement;
    const ctx = canvasElem.getContext('2d');
    // Chart.defaults.global.legend.display = this.isLabelShow;
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: this.chartType,

      // The data for our dataset
      data: this.chartConfig,

      // Configuration options go here
      options: {
        legend: {
          display: this.isLabelShow,
          onClick: function (e, legendItem) {
            const labelIndex = legendItem.datasetIndex;
            this.labelClicked.emit({rowClicked: labelIndex});
          }
        }
      }
    });
  }

}
