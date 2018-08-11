import { Route } from '@angular/router';
import { PolicyComponent } from './policy.component';


export const PolicyRoutes: Route[] = [
  {
    path: '',
    component: PolicyComponent
  },{
    path: 'pol',
    component: PolicyComponent
  }
];
