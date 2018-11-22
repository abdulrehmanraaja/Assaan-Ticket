import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DestinationComponent} from './pages/destination/destination.component';
import { TailarMadeComponent} from './pages/tailar-made/tailar-made.component';

 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'tailar-made', component: TailarMadeComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})







export class AppRoutingModule { }
