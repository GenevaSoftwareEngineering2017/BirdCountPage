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
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpParams } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

const appRoutes: Routes = [
  { path: 'current', component: CurrentComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'past', component: PastComponent},
  { path: 'example', component: ExampleComponent},
	{ path: 'form', component: FormComponent},
	{ path: 'compile', component: CompileComponent},
	{ path: 'pastexample', component: PastexampleComponent},
	{ path: 'login', component: LoginComponent}
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
    PastexampleComponent,
    LoginComponent
  ],
  imports: [
      BrowserModule, HttpModule,
       RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
