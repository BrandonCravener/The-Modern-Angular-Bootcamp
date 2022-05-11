import { Component, Input, OnInit } from '@angular/core';
import { ItemsData } from '../types';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  @Input('data') items: ItemsData[] = [];

  constructor() {}

  ngOnInit(): void {}
}
