import {NgModule} from "@angular/core";
import {ChartExampleComponent} from "./chart-example.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

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
  declarations: [
    ChartExampleComponent,
  ],
})

export class ChartExampleModule {
}
