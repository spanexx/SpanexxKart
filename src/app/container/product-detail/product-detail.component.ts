import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../Model/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { SetBackgroudDirective } from '../../CustomDirectives/set-backgroud.directive';
import { AppComponent } from '../../app.component';
import { AppHoverDirective } from '../../CustomDirectives/app-hover.directive';


@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule, ProductListComponent, SetBackgroudDirective, AppHoverDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  
  isDetailsVisible: boolean = true;
  @Input() productListComp: ProductListComponent = undefined;

  @Input()
  product: Product;

 ngOnInit(){
  this.product = this.productListComp.selectedProduct;
 }

 toggleDetailsVisibility() {
  this.isDetailsVisible = !this.isDetailsVisible;
}

}
