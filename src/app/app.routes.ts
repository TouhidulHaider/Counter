import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterPageComponent } from './counter-page/counter-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterPageComponent }
];
