import { Component, Input, OnInit } from '@angular/core';
import { TableData, TableHeaders } from '../types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input('class') classNames = '';

  @Input() data: TableData[] = [];
  @Input() headers: TableHeaders[] = [];

  constructor() {}

  ngOnInit(): void {}
}
