import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { HomeComponent } from './user/pages/home/home.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';

const routes: Routes = [
  
  {path:"",component:UserLayoutComponent,children:[
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:"home",component:HomeComponent},
  ]},
  
  {path:"admin",component:AdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
