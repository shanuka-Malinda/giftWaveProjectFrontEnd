import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { GiftsComponent } from './user/pages/gifts/gifts.component';
import { HomeComponent } from './user/pages/home/home.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';

const routes: Routes = [

  {
    path: "", component: UserLayoutComponent, children: [
      { path: "", redirectTo: 'home', pathMatch: 'full' },
      { path: "home", component: HomeComponent },
      {path:"gifts",component:GiftsComponent}
    ]
  },
  { path: "admin", component: AdminLayoutComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {path:"**",component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
