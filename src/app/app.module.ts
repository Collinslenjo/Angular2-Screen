import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login.component';
import { RegisterFormComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegisterFormComponent}
])

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
