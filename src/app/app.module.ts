import { SpinnerInterceptorService } from './shared/Services/spinner/spinner-interceptor.service';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr'

import { AppComponent } from './app.component';
import { AuthInterceptor } from './shared/auth/auth-interceptor';
import { AuthModule } from './shared/auth/auth.module';
import { AngularMaterialModule } from './AngularMaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { MainPageComponent } from './shared/main-page/main-page.component';

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
    ToastrModule.forRoot ({
      timeOut: 2000,
      progressBar: true,
      preventDuplicates: true,
    }),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
