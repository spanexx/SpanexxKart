import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]',
  standalone: true
})
export class AppHoverDirective {

  constructor(private _element: ElementRef,
    private renderer: Renderer2) { 

  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '#333'
  @HostBinding('style.color') color: string = 'white'
  @HostBinding('style.border') border: string = 'none'
  @HostBinding('style.cursor') cursorPointer: string = 'pointer'
  @HostBinding('style.transition') transition: string = 'background-color 0.3s ease-in-out'


  @HostListener('mouseenter') OnMouseEnter(){
    this.backgroundColor = 'white';
    this.color = 'black';
    this.border = '1px solid #333';
  }

  @HostListener('mouseout') OnMouseOut(){
    this.backgroundColor = '#333';
    this.color = 'white';
    this.border = 'none';
  }
}
