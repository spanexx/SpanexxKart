import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackgroud]',
  standalone: true
})
export class SetBackgroudDirective {

  @Input('appSetBackgroud')changeBackgroudTextcolo: { backgroundColor: string, textColor: string}

  constructor(private element: ElementRef, private renderer: Renderer2) { 


   
  }
  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeBackgroudTextcolo.backgroundColor)
    this.renderer.setStyle(this.element.nativeElement, 'color', this.changeBackgroudTextcolo.textColor)

  }
}
  