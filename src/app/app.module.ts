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

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    ProfileComponent,
    CardItemsComponent,
    ResidentialComponent
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
