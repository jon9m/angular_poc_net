import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProfileComponent } from './profile/profile.component';
import { CardItemsComponent } from './carditems/carditems.component';
import { ResidentialComponent } from './carditemdetails/residential/residential.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app-reducer';
import { ContactdetailsComponent } from './carditemdetails/contactdetails/contactdetails.component';
import { CarlicenseComponent } from './carditemdetails/carlicense/carlicense.component';
import { CarregistrationComponent } from './carditemdetails/carregistration/carregistration.component';
import { SpeedingfineComponent } from './carditemdetails/speedingfine/speedingfine.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    ProfileComponent,
    CardItemsComponent,
    ResidentialComponent,
    ContactdetailsComponent,
    CarlicenseComponent,
    CarregistrationComponent,
    SpeedingfineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ appState: appReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
