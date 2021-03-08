import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {loadRemoteModule} from "@angular-architects/module-federation";
import {InjectionToken} from "@angular/core";

export const COMMUNICATION_SERVICE_TOKEN = new InjectionToken<string>("CommunicationService");

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },

    // Your route here:

    {
      path: 'flights',
      loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
    },

    {
      path: 'charts',
      loadChildren: () => loadRemoteModule({
        remoteName: 'mfChart',
        exposedModule: './Module'
      }).then(m => m.ChartExampleModule),
      data: {
        // requiredService: COMMUNICATION_SERVICE_TOKEN,
      }
    },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

