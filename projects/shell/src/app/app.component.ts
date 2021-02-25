import {
  Component,
  ViewChild,
  ViewContainerRef,
  Injector,
  ComponentFactoryResolver,
  AfterViewInit,
  ComponentRef,
  OnInit,
} from '@angular/core';
import {loadRemoteModule} from "@angular-architects/module-federation";
import {BehaviorSubject, Observable} from "rxjs";
import {Actions, CommunicationService, IAction, IMFEComponent} from "gx-core";

import {FIRST_SERVICE_TOKEN} from "./app.routes";
import {filter, map} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('chartView1', { read: ViewContainerRef, static: true })
  public chartView1!: ViewContainerRef;

  @ViewChild('chartView2', { read: ViewContainerRef, static: true })
  public chartView2!: ViewContainerRef;

  public title = 'shell';
  public currentCurrency$: Observable<string>;

  public communicationActionSubject$: BehaviorSubject<IAction>;
  private communicationService: CommunicationService;

  constructor(
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
  ) {
    this.communicationService = injector.get<CommunicationService>(FIRST_SERVICE_TOKEN);
    this.communicationActionSubject$ = this.communicationService.actionsStream$;
    this.currentCurrency$ = this.communicationActionSubject$.pipe(
      filter(action => action?.type === Actions.UpdateCurrency),
      map((a) => a.currency))

  }

  public ngOnInit(): void {
    this.communicationService?.actionsStream$.pipe()
      .subscribe((action: IAction) => {
        console.log(`%c action - ${action?.currency}`, 'background-color: lightblue');
    })
  }

  public ngAfterViewInit(): void {
    this.loadMFE('mfChart', './ChartComponent', this.chartView1);
    this.loadMFE('mfChart', './ChartComponent', this.chartView2);
  }

  private loadMFE(remoteName: string, exposedModule: string, viewContainer: ViewContainerRef) {
    loadRemoteModule({ remoteName, exposedModule })
      .then((c) => c.ChartExampleComponent)
      .then(component => {
        const factory = this.resolver.resolveComponentFactory<IMFEComponent>(component);
        // We use ComponentRef<any> because MFE component type is unknown
        const compRef: ComponentRef<IMFEComponent> = viewContainer.createComponent<IMFEComponent>(factory, undefined, this.injector);
        const {instance} = compRef;
        instance.setCommunicationSubject(this.communicationService.actionsStream$);
      });
  }

  public setDefaultCurrency() {
    this.communicationService.actionsStream$.next({
      type: Actions.UpdateCurrency,
      currency: 'CHF',
    });
  }
}
