import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailscardComponent } from './detailscard/detailscard.component';
import { ResidentialComponent } from './residential/residential.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    ProfileComponent,
    DetailscardComponent,
    ResidentialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
