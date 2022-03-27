import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthModule } from './shared/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './AngularMaterial.module';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { RegisterComponent } from './shared/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
  ],
  imports: [
    AuthModule,
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
