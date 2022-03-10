import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RegionsComponent } from './regions/regions.component';
import { DepartementsComponent } from './departements/departements.component';
import { CommunesComponent } from './communes/communes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegionsComponent,
    DepartementsComponent,
    CommunesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
