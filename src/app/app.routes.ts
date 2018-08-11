/**
 * @Author Shankar Morwal
 * Router file. Every module will have their own routers.
 */
import { Routes } from '@angular/router';
import { PolicyRoutes } from './policy/policy.route';
import { RegistrationRoutes } from './registration/registration.route';
export const routes: Routes = [
    ... PolicyRoutes,
   ... RegistrationRoutes
];
