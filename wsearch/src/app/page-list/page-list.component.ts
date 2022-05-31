import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from '../wikipedia.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass'],
})
export class PageListComponent implements OnInit {
  @Input() pages: SearchResult[] = [];

  constructor() {}

  ngOnInit(): void {}
}
