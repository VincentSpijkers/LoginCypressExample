import { Routes } from '@angular/router';
import {HomePageComponent} from "./home/home-page.component";
import {LoginComponent} from "./authentication/login.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
];
