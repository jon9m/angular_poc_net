import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ResidentialComponent } from './carditemdetails/residential/residential.component';
import { ContactdetailsComponent } from './carditemdetails/contactdetails/contactdetails.component';
import { CarlicenseComponent } from './carditemdetails/carlicense/carlicense.component';
import { CarregistrationComponent } from './carditemdetails/carregistration/carregistration.component';
import { SpeedingfineComponent } from './carditemdetails/speedingfine/speedingfine.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'residential', component: ResidentialComponent },
  { path: 'phone', component: ContactdetailsComponent },
  { path: 'carlicence', component: CarlicenseComponent },
  { path: 'carregistration', component: CarregistrationComponent },
  { path: 'infringements', component: SpeedingfineComponent },
  { path: '', component: ProfileComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
