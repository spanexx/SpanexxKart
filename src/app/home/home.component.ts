import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TopHeaderComponent } from '../header/top-header/top-header.component';

import { SearchComponent } from '../container/search/search.component';
import { ContactComponent } from '../contact/contact.component';
import { ContainerComponent } from '../container/container.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TopHeaderComponent, ContainerComponent, SearchComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
