import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormComponent } from './login/login.component';
import { RegisterFormComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Welcome';
}
