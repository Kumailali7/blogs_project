import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogUpdateComponent } from './blog-update/blog-update.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BloggerBlogsComponent } from './blogger-blogs/blogger-blogs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './services/route-guard/route-guard.service';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'home/:name', component: HomeComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'blogger', component: LoginComponent},
  {path:'blogger/blogs', component: BloggerBlogsComponent, canActivate : [RouteGuardService]},
  {path:'blogs', component: BlogsComponent},
  {path:'blog/:id', component: BlogViewComponent},
  {path:'updateblog/:id', component: BlogUpdateComponent, canActivate : [RouteGuardService]},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
