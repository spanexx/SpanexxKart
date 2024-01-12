import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = "";
  @ViewChild('keyin') searchInputEl: ElementRef;

  @Output()
  SearchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    
  }

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.SearchTextChanged.emit(this.searchText);
  }

}
