import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterPageComponent } from './counter-page/counter-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }