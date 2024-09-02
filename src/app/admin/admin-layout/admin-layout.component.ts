import { Component } from '@angular/core';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

   sidebarVisible: boolean = false;

  currentDate: string;

  constructor() {
    const date = new Date();
    this.currentDate = date.toDateString();

  }



}