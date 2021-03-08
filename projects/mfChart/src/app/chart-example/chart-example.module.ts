import {NgModule} from "@angular/core";
import {ChartExampleComponent} from "./chart-example.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CommunicationService} from "gx-core";

export const chart_routes = [
  {
    path: '',
    component: ChartExampleComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(chart_routes)
  ],
  providers: [CommunicationService],
  declarations: [
    ChartExampleComponent,
  ],
  exports: [ChartExampleComponent],
})

export class ChartExampleModule {
}
