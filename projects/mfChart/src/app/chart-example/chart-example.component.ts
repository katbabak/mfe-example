import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import {Options} from "highcharts";

// Exporting(Highcharts);

@Component({
  selector: 'app-chart-example',
  templateUrl: './chart-example.component.html'
})
export class ChartExampleComponent implements AfterViewInit {
  @ViewChild('chartContainer') public container: ElementRef;

  public options: any = {
    chart: {
      type: 'scatter',
      height: 700
    },
    title: {
      text: 'Sample Scatter Plot'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
          'y: ' + this.y.toFixed(2);
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          return Highcharts.dateFormat('%e %b %y', this.value);
        }
      }
    },
    series: [
      {
        name: 'Normal',
        turboThreshold: 500000,
        data: []
      },
      {
        name: 'Abnormal',
        turboThreshold: 500000,
        data: []
      }
    ]
  };
  public optVersion2: any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }],
  };
  constructor() { }

  ngAfterViewInit() {
    console.log(this.container);
    Highcharts.chart(this.container.nativeElement, this.optVersion2)
  }
}
