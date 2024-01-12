import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  @Output()
  selectedButtonchange: EventEmitter<string> = new EventEmitter<string>();

  selectedButton: string = 'all';

  onSelectedButtonchange(){
    this.selectedButtonchange.emit(this.selectedButton)
  }

}
