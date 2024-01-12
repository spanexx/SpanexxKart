import { Component, HostListener} from '@angular/core';
import { RouterOutlet, RouterLink, } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { LogoComponent } from '../logo/logo.component';
import { HeaderDirective } from '../CustomDirectives/header.directive';



@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [RouterLink, RouterOutlet, MainMenuComponent,CommonModule, TopHeaderComponent, TopMenuComponent, LogoComponent, HeaderDirective ]
})
export class HeaderComponent {
  showNav = false;
  isSmallScreen = false;
showmenu: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth <= 768;
  }
  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
    { label: 'Products', route: '/container' },
    { label: 'Sales', route: '/sales'},
  ];
  TopmenuItems = [
    { label: 'Help', route: '/help' },
    { label: 'SignUp/SignIn', route: '/reg-form' },
    { label: 'Track Order', route: '/track-order' }
  ];

  toggleNav() {
    this.showNav = !this.showNav;
  }
  }

  
