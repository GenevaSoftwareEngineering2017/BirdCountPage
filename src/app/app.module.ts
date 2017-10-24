import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrentComponent } from './current/current.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ExampleComponent } from './example/example.component';
import { PastComponent } from './past/past.component';

const appRoutes: Routes = [
    { path: 'current', component: CurrentComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'past', component: PastComponent},
    { path: 'example', component: ExampleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    StatisticsComponent,
    ExampleComponent,
    PastComponent
  ],
  imports: [
      BrowserModule,
       RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
