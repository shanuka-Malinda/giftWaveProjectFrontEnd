import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  menuActive: boolean = false;
  sidebarVisible: boolean = false;

  //get user details for variable
  username: any = "Username";
  imageUrl: any="";
  email:any="";

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  items: MenuItem[] | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private authService: AuthService, private router: Router){
    if (typeof window !== 'undefined') {
      this.username = localStorage.getItem('username');
      this.imageUrl = `data:image/png;base64,${localStorage.getItem('imgUrl')}`;
      this.email = localStorage.getItem('email');
    }
  }
  ngOnInit() {

    

    this.items = [
      {
        label:this.username,
        items: [
          {
            label: 'Login',
            icon:'pi pi-sign-in',
            routerLink:'/login',
          },
          {
            label: 'Register',
            icon: 'pi pi-user-plus',
            routerLink: '/register'
          },
          {
            label: 'My Account',
            icon: 'pi pi-user',
            command: () => {
              this.sidebarVisible = true;
            }
          }
        ]
      }
    ];

  
 
  }


  logout() {
    // Perform logout logic here
   // this.authService.logout();
    localStorage.clear();
    this.router.navigate(['/home']); // Redirect to login page
  }
  
}
