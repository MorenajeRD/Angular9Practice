import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/Property-Card/property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';


const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'rent-property', component: PropertyListComponent },
  {  path:'property-detail/:id', component:PropertyDetailComponent},
  { path: 'add-property', component: AddPropertyComponent }

]

@NgModule({
  declarations: [
    AddPropertyComponent,
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
