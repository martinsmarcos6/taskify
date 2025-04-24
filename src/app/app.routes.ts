import { provideRouter, Routes } from '@angular/router';
import { DashboardHomeComponent } from './features/dashboard/pages/dashboard-home/dashboard-home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardHomeComponent }
];

export const routing = provideRouter(routes);