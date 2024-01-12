import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../Model/Product';
import { SetHighlightsDirective } from '../../../CustomDirectives/set-highlights.directive';
import { DisableProductDirective } from '../../../CustomDirectives/disable-product.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SetHighlightsDirective, DisableProductDirective],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css' ]
})
export class ProductComponent {
  isWishlistClicked = false;

  @Input()
  product: Product;
  
  isHovered(colors: string[]): boolean {
    // Only consider the product as hovered if it has colors and is in inventory
    return colors && colors.length > 0 && this.product.isInInventory;
  }
  
  toggleWishlist() {
    this.isWishlistClicked = !this.isWishlistClicked;
  }
 
}
