import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetHighlights]',
  standalone: true
})
export class SetHighlightsDirective {

  
  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

 @HostListener('mouseenter') onMouseEnter(){
   this.renderer.addClass(this.element.nativeElement,'highlight-product')
  }

 @HostListener('mouseout') onMouseOut(){
  this.renderer.removeClass(this.element.nativeElement,'highlight-product')
  } 

}
