import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from '../header/header.component';
import { TopHeaderComponent } from '../header/top-header/top-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';



@Component({
  selector: 'app-container',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchComponent, TopHeaderComponent, ProductListComponent, ProductDetailComponent, FeaturedBrandsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  searchText: string = '';
 @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  setSearchText(event: string){
    this.searchText = event;
  }



}
