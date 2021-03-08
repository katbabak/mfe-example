import {AfterViewInit, Component, ElementRef, Injector, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import {Actions, CommunicationService, IAction, IMFEComponent} from "gx-core";
import {BehaviorSubject, Observable} from "rxjs";
import {ActivatedRoute} from '@angular/router';
import {filter, map} from "rxjs/operators";

const CURRENCIES = ['CHF', 'USD', 'UAH', 'RUB', 'JPY', 'EUR', 'GBP', 'AUD', 'DZD', 'ARS', 'BTN', 'BOB', 'BAM', 'CZK'];

@Component({
  selector: 'app-chart-example',
  templateUrl: './chart-example.component.html',
  styleUrls: ['./chart-example.component.css'],
})
export class ChartExampleComponent implements AfterViewInit, OnInit, IMFEComponent {
  @ViewChild('chartContainer') public container: ElementRef;
  public currency$: Observable<string>;

  public chartOptions: any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Costs'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit bought price'
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
  // private communicationService: CommunicationService;
  private communicationSubject$: BehaviorSubject<IAction>;

  constructor(route: ActivatedRoute, injector: Injector, private communicationService: CommunicationService) {
    // const serviceToken = route.snapshot?.data?.['requiredService'];
    // if (serviceToken) {
    //   this.communicationService = injector.get(serviceToken);
      this.communicationSubject$ = this.communicationService.actionsStream$;
    // }
  }

  public ngAfterViewInit() {
    Highcharts.chart(this.container.nativeElement, this.chartOptions);
  }

  public ngOnInit(): void {
    this.currency$ = this.communicationSubject$
      ?.pipe(filter(action => action?.type === Actions.UpdateCurrency),
        map((a) => a.currency));
  }

  public setCommunicationSubject(subject: BehaviorSubject<IAction>): void {
    // this.communicationSubject$ = subject;
  }

  public changeCurrency() {
    const newRandomCurrency = CURRENCIES[Math.floor(Math.random() * CURRENCIES.length)];
    this.communicationSubject$?.next({
      type: Actions.UpdateCurrency,
      currency: newRandomCurrency,
    });
  }
}

