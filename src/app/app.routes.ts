import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ReservationComponent} from "./components/reservation/reservation.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reservation', component: ReservationComponent },
];
