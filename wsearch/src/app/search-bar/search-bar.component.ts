import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();

  term = '';

  constructor() {}

  ngOnInit(): void {}

  onSearchInput(event: Event) {
    this.term = (event.target as HTMLInputElement).value;
  }

  onSearchSubmit(event: Event) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
