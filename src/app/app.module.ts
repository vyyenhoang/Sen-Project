import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { apiService } from './services/api.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { TokenInterceptor } from './services/token.interceptor';
import { JwtInterceptor } from './services/jwt.interceptor';
import { authService } from './services/auth.service';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WebServicePageComponent } from './pages/service-pages/web-service-page/web-service-page.component';
import { MobileServicePageComponent } from './pages/service-pages/mobile-service-page/mobile-service-page.component';
import { ContactComponent } from './pages/contact-pages/contact/contact.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    WebServicePageComponent,
    MobileServicePageComponent,
    ContactComponent,
    ServicePageComponent,
    LoginComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    LoadingBarModule

  ],
  providers: [apiService,
    authService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
