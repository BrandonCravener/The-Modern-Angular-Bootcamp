import { Component, OnInit } from '@angular/core';
import { ItemsData, StatisticsData } from '../types';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats: StatisticsData[] = [
    { value: 22, label: '# Of Users' },
    { value: 812, label: 'Gross Revenue' },
    { value: 8672, label: 'Reviews' },
  ];

  items: ItemsData[] = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'Great couch 10/10',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'Great dresser 10/10',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
