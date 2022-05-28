import { Component, Input, OnInit } from '@angular/core';

interface AccordionElements {
  title: string;
  content: string;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items: AccordionElements[] = [];
  openedItemIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  accordionClick(index: number) {
    if (index == this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
}
