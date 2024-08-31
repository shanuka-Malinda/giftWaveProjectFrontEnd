import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { FileUploadModule } from 'primeng/fileupload';
import { MenubarModule } from 'primeng/menubar';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { FooterComponent } from './user/component/footer/footer.component';
import { HeaderComponent } from './user/component/header/header.component';
import { HomeComponent } from './user/pages/home/home.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { CarouselComponent } from './user/component/carousel/carousel.component';
import { NavBarComponent } from './user/component/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    NavBarComponent
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
    TagModule
  ],
  providers: [
    provideClientHydration(),
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
