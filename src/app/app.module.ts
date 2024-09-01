import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLinkActive } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { SidebarModule } from 'primeng/sidebar';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CarouselComponent } from './user/component/carousel/carousel.component';
import { FooterComponent } from './user/component/footer/footer.component';
import { HeaderComponent } from './user/component/header/header.component';
import { NavBarComponent } from './user/component/nav-bar/nav-bar.component';
import { GiftsComponent } from './user/pages/gifts/gifts.component';
import { HomeComponent } from './user/pages/home/home.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundPageComponent,
    GiftsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    ToastModule,
    BrowserAnimationsModule,
    MenubarModule,
    AvatarModule,
    CarouselModule,
    RouterLinkActive,
    TagModule,DividerModule,MenuModule,MultiSelectModule,DropdownModule,SidebarModule
  ],
  providers: [
    provideClientHydration(),
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
