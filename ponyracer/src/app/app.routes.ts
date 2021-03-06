import { RacesComponent } from './races/races.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'races',
    component: RacesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]
