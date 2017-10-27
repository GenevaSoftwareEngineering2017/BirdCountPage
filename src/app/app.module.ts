import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrentComponent } from './current/current.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ExampleComponent } from './example/example.component';
import { PastComponent } from './past/past.component';
import { FormComponent } from './form/form.component';
import { CompileComponent } from './compile/compile.component';
import { PastexampleComponent } from './pastexample/pastexample.component';

const appRoutes: Routes = [
    { path: 'current', component: CurrentComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'past', component: PastComponent},
    { path: 'example', component: ExampleComponent},
	{ path: 'form', component: FormComponent},
	{ path: 'compile', component: CompileComponent},
	{ path: 'pastexample', component: PastexampleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    StatisticsComponent,
    ExampleComponent,
    PastComponent,
    FormComponent,
    CompileComponent,
    PastexampleComponent
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
