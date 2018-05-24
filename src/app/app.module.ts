import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from './app.routes';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciesComponent } from './components/precies/precies.component';
import { ProtectedComponent } from './components/protected/protected.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciesComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule, 
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
