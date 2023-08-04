import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AutthRoutingModule
  ]
})
export class AutthModule { }
