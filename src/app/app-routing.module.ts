
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact-pages/contact/contact.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent},


      { path: 'about', component: AboutComponent},
      { path: 'blog', component: BlogComponent},

      { path: 'contact', component: ContactComponent},
      { path: 'services', component: ServicePageComponent},
      { path: 'login', component: LoginComponent},
      {path: '**', redirectTo: '', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
