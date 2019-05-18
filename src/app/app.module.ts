import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterLink,RouterLinkActive, RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AdminDasboardComponent } from './admin-dasboard/admin-dasboard.component';

const routes:Routes=[
  {path:'navbar', component:NavbarComponent},
  {path:'login', component:LoginFormComponent},
  {path:'signIn', component:LoginFormComponent},
  {path:'adminDashboard' , component:AdminDasboardComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    AdminDasboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
