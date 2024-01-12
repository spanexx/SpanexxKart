import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink, } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from '../main-menu/main-menu.component';


@Component({
  selector: 'top-menu',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {
  @Input() mainMenu: MainMenuComponent;
  menuItems = [
    { label: 'Help', route: '/help' },
    { label: 'SignUp/SignIn', route: '/regForm' },
    { label: 'Track Order', route: '/track-order' }
  ];
}
