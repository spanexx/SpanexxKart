import { Component,  OnInit, Renderer2, ElementRef, HostListener, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { HomeComponent } from '../../home/home.component';
import { AboutComponent } from '../../about/about.component';
import { ContactComponent } from '../../contact/contact.component';
import { LogoComponent } from '../../logo/logo.component';




@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule,LogoComponent ],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  showMenu: boolean = true;
  showButton: boolean = false;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,

    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenWidth();
    }
  }

  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
    { label: 'Products', route: '/container' },
    { label: 'Sales', route: '/sales'},
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenWidth();
    }
  }

  checkScreenWidth(): void {
    const screenWidth = window.innerWidth;

    // Toggle the showButton based on the screen width
    this.showButton = screenWidth < 768;
  }




  menuLinks(){
this.showMenu = !this.showMenu;
  }
  
}

