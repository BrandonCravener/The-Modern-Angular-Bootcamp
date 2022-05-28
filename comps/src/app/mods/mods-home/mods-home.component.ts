import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'Cheese or Sneeze?',
      content: 'Obviously cheese over sneeze anyday.',
    },
    { title: 'Cheese or Peas?', content: 'Obviously cheese over peas anyday.' },
    { title: 'Cheese or Tea?', content: 'Obviously tea over cheese anyday.' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onModalClick() {
    this.modalOpen = !this.modalOpen;
  }
}
