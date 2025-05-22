import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterPageComponent } from './counter-page/counter-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }